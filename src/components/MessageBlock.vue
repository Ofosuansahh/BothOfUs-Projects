<template>
  <div class="col-lg-8 contact-list column lc messages-wrapper">
    <div class="messages-area" :id="'messageBlock_'+uId">
      <div class="row mt-2" v-for="message in messages[uId]" :key="message.id" :class="{
          'right-msg': message.content.sender,
          'left-msg': !message.content.sender,
        }">
        <!-- For Admin messages -->
        <div v-if="message.content.sender" class="small-text col-5 msg-left d-flex flex-column">
          <div class="time-stamp mb-1">
            {{ message.content.created | moment }}
          </div>
          <img v-if="message.content.type == 'image'" :src="appURL + message.content.imageURL" alt="image"
            class="img-fluid">
          <span v-else>
            {{ message.content.message }}
          </span>
        </div>

        <!-- For Both -->
        <img v-if="userImage && !message.content.sender" :src="appURL + userImage" alt="image"
          style="width: 40px; height: 40px;" class="rounded-circle ml-4 mr-2 my-2" />
        <img v-else-if="admin_image && message.content.sender" :src="appURL + admin_image" alt="image"
          style="width: 40px; height: 40px;" class="rounded-circle ml-2 mr-2 my-2" />
        <img v-else src="../assets/nav-user.png" class="my-2 bg-black rounded-circle ml-4 mr-2 px-2 pt-2 pb-1"
          alt="default image" style="width: 40px; height: 40px;" />

        <!-- For User messages -->
        <div v-if="!message.content.sender" class="small-text col-5 msg-right">
          <img v-if="message.content.type == 'image'" :src="appURL + message.content.imageURL" alt="image"
            class="img-fluid">
          <span v-else>
            {{ message.content.message }}
          </span>
        </div>
        <span v-if="!message.content.sender" class="right extra-small-text pl-1 align-self-end">
          {{ message.content.created | moment }}
        </span>
      </div>
    </div>
    <div class="type-area d-flex flex-column justify-content-end px-5">
      <div class="pt-2">
        <input class="input-message-box py-2" v-if="text_field" id="txt" placeholder="Write your message here" v-model="input" @keydown.enter="sendMessage">
      </div>
      <div class="type w-100 d-flex flex-row justify-content-end mt-3">
        <picture-input v-if="!text_field" ref="pictureInput" @change="inputImage" width="150" height="100" margin="0"
          accept="image/jpeg,image/png" size="2" class="mb-2 position-relative" :hideChangeButton="true"
          :removable="false" :crop="false">
        </picture-input>
        <div class="message-footer">
          <button type="button" @click="checkMessageType"
            class="btn btn-primary px-4 enroute-btn resource-large-text send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from "firebase/app";
  import moment from "moment";
  import axios from 'axios';
  import {
    mapState
  } from 'vuex';
  import {
    db
  } from "../db-init";
  import PictureInput from 'vue-picture-input';
  import {
    b64toBlob
  } from '../utils/helper';

  export default {
    name: "MessageBlock",
    components: {
      PictureInput,
    },
    props: {
      uId: {
        type: Number,
        default: -1,
        description: "User id for the message block",
      },
      userImage: {
        type: String,
        default: null,
        description: "User Image",
      },
      active: {
        type: Boolean,
        default: false,
        description: "Is the block active",
      },
    },
    filters: {
      moment: function (date) {
        let d = moment(date);
        return d.isValid() ? moment(date).format("HH.mm") : "N/A";
      },
    },
    data: () => {
      return {
        appURL: process.env.VUE_APP_MAIN_URL,
        admin_image: JSON.parse(localStorage.getItem('user')).image,
        input: "",
        text_field: true,
        image: null,
      }
    },
    methods: {
      messageInput: function (e) {
        if (e.keyCode === 13) {
          this.sendMessage();
          this.input = "";
        }
      },
      checkMessageType: function () {
        if (this.text_field) {
         if (this.input === '') {
          this.$noty.error('Message cannot be empty');
          return;
        }
          this.sendMessage();
        } else if (this.image) {
          this.uploadImage();
        } else {
          this.$noty.error('Please upload an image');
          return;
        }
      },
      sendPushNotificationToUser: function () {
        let url = `admin/firebase/message/${this.uId}?access_token=${localStorage.getItem('access_token')}`
        axios({
          method: "POST",
          url: url,
          headers: {
            "content-type": "application/json"
          }
        }).then(
          result => {
            if (result) {
              console.log(result.data.message);
            }
          },
          error => {
            console.log(error);
          }
        );
      },
      sendMessage: function (imageURL = null) {
        const messageObj = {
          id: `user_${this.uId}`,
          sender: 1,
          created: firebase.database.ServerValue.TIMESTAMP,
          updated: firebase.database.ServerValue.TIMESTAMP,
        };
        if (this.text_field) {
          messageObj.type = 'text';
          messageObj.message = this.input;
        } else {
          messageObj.type = 'image';
          messageObj.imageURL = imageURL;
        }
        db.ref(
            `messages/admins/${1}/users/${
          this.uId
        }`
          )
          .push()
          .set(messageObj, (error) => {
            if (error) {
              console.log("Sending message failed:" + error);
            } else {
              // Data saved successfully!
              this.input = "";
              this.text_field = true;
              this.image = null;
              this.sendPushNotificationToUser();
            }
          });
        setTimeout(() => {
          this.scrollToBottom();
        }, 100);
      },
      scrollToBottom: function () {
        const messageBlock = document.querySelector(`#messageBlock_${this.uId}`);
        messageBlock.scrollTop = messageBlock.scrollHeight;
      },
      inputImage: function () {
        if (this.$refs.pictureInput.image) {
          this.image = this.$refs.pictureInput.image;
        }
      },
      browseImage: function () {
        this.text_field = false;
      },
      uploadImage: function () {
        const formDataToUpload = new FormData();
        const blob = b64toBlob(this.image);
        formDataToUpload.append("image", blob);
        axios({
          method: "POST",
          url: `admin/firebase/image/${this.uId}?access_token=${localStorage.getItem('access_token')}`,
          data: formDataToUpload,
          headers: {
            "content-type": "multipart/form-data"
          }
        }).then(
          result => {
            if (result) {
              this.sendMessage(result.data.image);
            }
          },
          error => {
            console.log(error);
          }
        );
      }
    },
    computed: {
      ...mapState([
        'messages'
      ])
    },
    created() {
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    },
    watch: {
      active: function (newValue, oldValue) {
        newValue;
        oldValue;
        this.scrollToBottom();
      }
    },
  };
</script>

<style scoped>
  .messages-wrapper{
    padding-bottom:0 !important;
    margin-bottom:0 !important;
  }

  .contact-list.messages-wrapper {
    opacity: 0.9 !important;
    border-radius: 4px !important;
    box-shadow: 0 2px 5px -2px rgba(30, 30, 30, 0.2) !important;
    background: white;
    height: auto;
    margin: 0.5rem !important;
    padding: 0;
    overflow: hidden;
  }

  .unread {
    color: white !important;
    background: #db9b59 !important;
    border-radius: 100% !important;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem !important;
  }

  .type {
    display: block;
    position: relative;
    border-radius: 4px;
    background: #fff;
  }

  .type-area {
    text-align: center !important;
    width: 100%;
    height:20%;
    padding: 14px 20px;
  }

  .message-footer {
    /* position: absolute;
    top: 17px;
    right: 10px;
    display: flex; */
  }

  .send-button {
    width: 121px;
    height: 35px;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    font-size: 16px !important;
    font-weight: 300; 
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    cursor: pointer !important;
    background-color:#ebcdc6 !important;
    color: #523b36 !important;
  }

  textarea {
    display: block;
    opacity: 0.9 !important;
    border: none !important;
    width: 100%;
    padding: 10px 20px;
  }

  textarea::placeholder {
    color: #1e1e1e !important;
    opacity: 0.5 !important;
  }

  .msg-right {
    background-image: linear-gradient(to right, #faf0f0, #f2e0dc 96%);
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    color:black;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
  }

  .msg-left {
    background-image: linear-gradient(to right, #faf0f0, #f2e0dc 96%);
    border-radius: 10px;
    padding: 10px;
    font-size: 14px !important;
    color:black;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
  }

  .messages-area {
    padding: 30px 20px 10px 0px;
    height: 80%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .column.lc .user img {
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    object-fit: contain !important;
  }

  .right-msg {
    margin-top: 26px;
    margin-bottom: 26px;
    justify-content: flex-end;
  }

  .left-msg {
    margin-top: 26px;
    margin-bottom: 26px;
  }

  .new-msg.btn {
    width: 209px;
    height: 40px;
    font-size: 16px !important;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .time-stamp[data-v-509981f6] {
    font-size: 14px;
    padding-left: 0px;
    color: #1e1e1e !important;
    opacity:0.7;
  }

  .input-message-box{
    width:100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px black;
  }

  input:focus {
    outline: none;
  }

  input::placeholder{
    opacity: 0.5;
    color:#1e1e1e;
  }
</style>
