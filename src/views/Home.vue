<template>
  <div class="">
    <div v-if="loading" class="loading-container w-100 d-flex justify-content-center align-items-center">
      <div class="loader">
      </div>
    </div>
  <div class="header">
          <nav id="aheader-nav" class="navbar navbar-expand-md navbar-dark bg-y1 shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="">
                    <img style="width: 75%;" src="https://passio.work/images/passio1.png">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Jobs</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="https://passio.work/jobs">View Jobs</a>
                                <a class="dropdown-item" href="https://passio.work/hiring">Post a Job</a>
                                </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Candidates</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="https://passio.work/candidates">View Candidates</a>
                                <a class="dropdown-item" href="https://passio.work/looking-for-work">Post your Profile</a>
                                </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://buildcv.passio.work/">CV Builder</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://passio.work/how-it-works">How It Works</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://passio.work/contact-us">Contact Us</a>
                        </li>
                        <!-- <li class="nav-item">
                            <button type="button" class="btn bg-dg1 text-white" data-toggle="modal" data-target="#myModal">Donate</button>
                        </li> -->
                    </ul>
                    <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->
            <li class="nav-item">
              <div class="lang-dropdown">
                <select class="form-control-sm" v-model="$i18n.locale">
                  <option class="text-uppercase"
                      v-for="(lng, i) in languageArray"
                      :key="`lng${i}`"
                      :value="lng"
                  >
                    {{ lng.toUpperCase() }}
                  </option>
                </select>
              </div>
            </li>
          </ul>
                </div>
            </div>
        </nav>
        <nav style="display: none;" id="header-nav" class="navbar navbar-expand-lg navbar-dark bg-y1">
            <div class="container">
                <a class="navbar-brand" href="">
                    <img style="width: 75%;" src="https://passio.work/images/passio1.png">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScrollContent" aria-controls="navbarScrollContent" aria-expanded="false" aria-label="">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarScrollContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Jobs</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="https://passio.work/jobs">View Jobs</a>
                                <a class="dropdown-item" href="https://passio.work/hiring">Post a Job</a>
                                </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Candidates</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="https://passio.work/candidates">View Candidates</a>
                                <a class="dropdown-item" href="https://passio.work/looking-for-work">Post your Profile</a>
                                </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://buildcv.passio.work/">CV Builder</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="https://passio.work/how-it-works">How It Works</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="https://passio.work/contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  </div>
    <main class="p-0">
      <div class="container-fluid cv-section">
        <div class="row">
          <div class="cv-builder col-md-6">
            <h2 class="view-title">{{ $t('Build your CV') }}</h2>
            <h2 class="about-title">{{ $t('About You:') }} </h2>
            <form id="cv_form" method="POST" action="">
              <div class="form-row">
                <div class="form-group col-md-6 pl-div">
                  <label>{{ $t('First Name *') }}</label>
                  <input :class="{ error: errors.first('first-name') }" v-validate="'required|max:20'" type="text"
                         class="form-control" name="first-name"
                         placeholder="Your First Name:" v-model.trim="form.first_name"/>
                  <i v-if="errors.first('first-name')" class="indelicon fa fa-exclamation position-absolute left"></i>
                </div>
                <div class="form-group col-md-6 pr-div">
                  <label>{{ $t('Last Name *') }}</label>
                  <input :class="{ error: errors.first('last-name') }" v-validate="'required|max:20'" type="text"
                         class="form-control" name="last-name"
                         placeholder="Your Last Name:" v-model.trim="form.last_name"/>
                  <i v-if="errors.first('last-name')" class="indelicon fa fa-exclamation position-absolute right"></i>
                </div>
                <div class="form-group col-md-6 pl-div">
                  <label>{{ $t('Email *') }}</label>
                  <input :class="{ error: errors.first('email') }" v-validate="'required|email'" type="email"
                         class="form-control" name="email"
                         placeholder="Eg. test@gmail.com" v-model.trim="form.email"/>
                  <i v-if="errors.first('email')" class="indelicon fa fa-exclamation position-absolute left"></i>
                </div>
                <div class="form-group col-md-6 pr-div">
                  <label>{{ $t('Phone Number *') }}</label>
                  <input :class="{ error: errors.first('phone') }" v-validate="'required|phone'" type="text"
                         class="form-control" name="phone" placeholder="Eg. +92356898875"
                         v-model.trim="form.phone"/>
                  <i v-if="errors.first('phone')" class="indelicon fa fa-exclamation position-absolute right"></i>
                </div>
                <div class="form-group col-md-6 pl-div">
                  <label>{{ $t('Country') }}</label>
                  <select class="form-control" name="country" v-model.trim="form.country" required>
                    <option value="" disabled selected>Choose an option…</option>
                    <option v-for="(country, index) in countries" :value="country.name" :key="index">{{ country.name }}</option>
                  </select>
                </div>
                <div class="form-group col-md-6 pr-div">
                  <label>{{ $t('City') }}</label>
                  <input class="form-control" type="text" name="city" placeholder="City here"
                         v-model.trim="form.city"/>
                </div>
                <div class="form-group col-md-6 pl-div">
                  <i v-if="errors.first('worklocation')"
                     class="indelicon fa fa-exclamation position-absolute left button"></i>
                  <label>{{ $t('Would you prefer on site work or remote?') }}</label>
                  <div class="customSelectBtns officeTypeBtns">
                    <button type="button"
                            :class="{ 'active' : form.worklocation == $t('Office'), 'btn' : true}"
                            @click="form.worklocation=$t('Office')">{{ $t('Office') }}
                    </button>
                    <button type="button"
                            :class="{ 'active' : form.worklocation == $t('Remote'), 'btn' : true}"
                            @click="form.worklocation=$t('Remote')">{{ $t('Remote') }}
                    </button>
                    <button type="button"
                            :class="{ 'active' : form.worklocation == $t('Flexible'), 'btn' : true}"
                            @click="form.worklocation=$t('Flexible')">{{ $t('Flexible') }}
                    </button>
                  </div>
                  <input type="hidden" v-model="form.worklocation" v-validate="'required'" name="worklocation">
                </div>
                <div class="form-group date-group col-md-6 pr-div">
                  <label>{{ $t('When are you Available from?') }}</label>
                  <date-picker :class="{ error: !form.joindate && submitForm }" v-model="form.joindate"
                               format="DD-MM-YYYY" :clearable=false
                               input-class="form-control" value-type="format"
                               placeholder="Choose a date…">
                    <i slot="icon-calendar"><i class="fa fa-calendar"></i></i>
                  </date-picker>
                  <i v-if="!form.joindate && submitForm"
                     class="indelicon fa fa-exclamation position-absolute right"></i>
                </div>
                <div class="form-group col-md-6 pl-div">
                  <i v-if="errors.first('relocate')"
                     class="indelicon fa fa-exclamation position-absolute left button"></i>
                  <label>{{ $t('Are you willing to relocate?') }}</label>
                  <div class="customSelectBtns relocateBtns">
                    <button type="button"
                            :class="{ 'active' : form.relocate == $t('Yes'), 'btn' : true}"
                            @click="form.relocate=$t('Yes')">{{ $t('Yes') }}
                    </button>
                    <button type="button" :class="{ 'active' : form.relocate == $t('No'), 'btn' : true}"
                            @click="form.relocate=$t('No')">{{ $t('No') }}
                    </button>
                  </div>
                  <input type="hidden" v-model="form.relocate" v-validate="'required'" name="relocate">
                </div>
                <div class="form-group col-md-6 pr-div">
                  <label>{{ $t('What are your preferred positions?') }} </label>
                  <multiselect v-model="form.positions" :options="position_options"
                               placeholder="Type in max. 3 options…" :multiple="true"
                               open-direction="bottom"
                               :show-labels="false" :max="3"></multiselect>
                </div>
                <div class="form-group col-md-12">
                  <i v-if="form.picture" class="indelicon fa fa-trash-o position-absolute" style="bottom: 10px;"
                     @click="removePicture()"></i>
                  <label>{{ $t('Upload a picture') }}</label>
                  <p class="label-desc">{{ $t('Your picture will appear on the CV, look professional!') }}</p>
                  <input ref="picture" type="file" accept="image/jpeg, image/png" class="form-control"
                         @change="addPicture($event.target.files)"
                         placeholder="Select a professional picture "/>
                         <i v-if="!form.uploadphoto && submitForm"
                     class="indelicon fa fa-exclamation position-absolute right"></i>
                </div>
                <div class="form-group col-md-12">
                  <label>{{ $t('Your LinkedIn') }}</label>
                  <p class="label-desc">{{ $t('Enter your LinkedIn username to help people find you.') }}</p>
                  <input type="text" class="form-control" v-model.trim="form.linkedin"
                         placeholder="Enter your Linkedin username… "/>
                </div>
                <div class="urls-container col-md-12">
                  <label>{{ $t('Your Sites') }}</label>
                  <p class="label-desc">{{ $t('Add a maximum of 2 links') }}</p>
                  <div v-for="(inputurl,k) in form.urls" :class="inputurl.class" :key="k">
                    <i v-if="k > 0" class="indelicon fa fa-trash-o"
                       @click="removeURLinput(k)"></i><input type="text" class="form-control"
                                                             v-model.trim="inputurl.url"
                                                             placeholder="Paste a link to your website, portfolio, or others…"/>
                  </div>
                  <div class="text-center" v-if="form.urls.length < 2">
                    <button type="button" class="btn btn-primary" @click="addURLinput()">{{ $t('Add a link') }}
                    </button>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <i v-if="errors.first('about')" class="indelicon fa fa-exclamation position-absolute left bio"></i>
                  <label>{{ $t('About you *') }}</label>
                  <textarea :class="{ error: errors.first('about') }" v-validate="'required'"
                            class="form-control biotext" name="about"
                            placeholder="Tell us a bit about yourself…" v-model.trim="form.bio"
                            maxlength="150" v-on:keyup="addWordCounter()"></textarea>
                  <p class="biotextcounter">Word Count: {{ form.bio.length }}/150</p>
                </div>
                <div class="work-container cv-sec col-md-12">
                  <p class="cvb-title">{{ $t('Your Competencies') }}</p>
                  <div class="skill-entry">
                    <div class="cwc position-relative">
                      <i v-if="errors.first('skills')"
                         class="indelicon fa fa-exclamation position-absolute left comp"></i>
                      <label>{{ $t('Your Skills *') }} </label>
                      <p class="label-desc">{{ $t('Add 5 skills to highlight') }}</p>
                      <div :class="{ error: errors.first('skills') }" v-for="(inputskill,k) in form.skills"
                           class="compentry" :key="k">
                        <input v-validate="'required'" type="text" name="skills" class="form-control"
                               v-model.trim="inputskill.name" maxlength="15" placeholder="Type in a skill…"/>
                      </div>
                    </div>
                    <div class="cwc">
                      <label>{{ $t('Evaluate your skill *') }}</label>
                      <p class="label-desc">{{ $t('(1= weak, 5= excellent)') }}</p>
                      <div v-for="(inputskill,k) in form.skills" :key="k"
                           class="customSelectBtns skillBtns position-relative">
                        <i v-if="errors.first('s-rating')"
                           class="indelicon fa fa-exclamation position-absolute right button"></i>
                        <input type="hidden" v-model="inputskill.rating" v-validate="'required'" name="s-rating">
                        <button type="button"
                                :class="{ 'active' : inputskill.rating == '1', 'btn' : true}"
                                @click="inputskill.rating='1'">1
                        </button>
                        <button type="button"
                                :class="{ 'active' : inputskill.rating == '2', 'btn' : true}"
                                @click="inputskill.rating='2'">2
                        </button>
                        <button type="button"
                                :class="{ 'active' : inputskill.rating == '3', 'btn' : true}"
                                @click="inputskill.rating='3'">3
                        </button>
                        <button type="button"
                                :class="{ 'active' : inputskill.rating == '4', 'btn' : true}"
                                @click="inputskill.rating='4'">4
                        </button>
                        <button type="button"
                                :class="{ 'active' : inputskill.rating == '5', 'btn' : true}"
                                @click="inputskill.rating='5'">5
                        </button>
                      </div>
                    </div>
                    <div class="text-center cfa-div">
                      <button type="button" class="btn btn-primary" @click="addSkillinput()">
                        <span v-if="form.skills.length < 5">{{ $t('Add a trait') }}</span>
                        <span v-else>{{ $t('Update') }}</span>
                      </button>
                    </div>
                  </div>
                  <div class="trait-entry">
                    <div class="cwc position-relative">
                      <i v-if="errors.first('traits')"
                         class="indelicon fa fa-exclamation position-absolute left comp"></i>
                      <label>{{ $t('Your Traits *') }} </label>
                      <p class="label-desc">{{ $t('Add 5 traits to highlight') }}</p>
                      <div :class="{ error: errors.first('traits') }" v-for="(inputtraits,k) in form.traits"
                           class="compentry" :key="k">
                        <input v-validate="'required'" type="text" name="traits" class="form-control"
                               v-model.trim="inputtraits.name" maxlength="15" placeholder="Type in a trait…"/>
                      </div>
                    </div>
                    <div class="cwc">
                      <label>{{ $t('Evaluate your Trait *') }}</label>
                      <p class="label-desc">{{ $t('(1= weak, 5= excellent)') }}</p>
                      <div v-for="(inputtraits,k) in form.traits" :key="k"
                           class="customSelectBtns traitBtns position-relative">
                        <i v-if="errors.first('t-rating')"
                           class="indelicon fa fa-exclamation position-absolute right button"></i>
                        <input type="hidden" v-model="inputtraits.rating" v-validate="'required'" name="t-rating">
                        <button type="button"
                                :class="{ 'active' : inputtraits.rating == '1', 'btn' : true}"
                                @click="inputtraits.rating='1'">1
                        </button>
                        <button type="button"
                                :class="{ 'active' : inputtraits.rating == '2', 'btn' : true}"
                                @click="inputtraits.rating='2'">2
                        </button>
                        <button type="button"
                                :class="{ 'active' : inputtraits.rating == '3', 'btn' : true}"
                                @click="inputtraits.rating='3'">3
                        </button>
                        <button type="button"
                                :class="{ 'active' : inputtraits.rating == '4', 'btn' : true}"
                                @click="inputtraits.rating='4'">4
                        </button>
                        <button type="button"
                                :class="{ 'active' : inputtraits.rating == '5', 'btn' : true}"
                                @click="inputtraits.rating='5'">5
                        </button>
                      </div>
                    </div>
                    <div class="text-center cfa-div">
                      <button type="button" class="btn btn-primary" @click="addTraitinput()">
                        <span v-if="form.traits.length < 5">{{ $t('Add a trait') }}</span>
                        <span v-else>{{ $t('Update') }}</span>
                      </button>
                    </div>
                  </div>
                  <div class="language-entry">
                    <div class="cwc position-relative">
                      <i v-if="errors.first('language')"
                         class="indelicon fa fa-exclamation position-absolute left comp"></i>
                      <label>{{ $t('What languages do you speak? *') }}</label>
                      <p class="label-desc">{{ $t('Add a maximum of 5') }}</p>
                      <div :class="{ error: errors.first('language') }" v-for="(inputlangs,k) in form.langs"
                           class="compentry langentry"
                           :key="k">
                        <i v-if="k > 0" class="indelicon fa fa-trash-o"
                           @click="removeLanginput(k)"></i>
                        <input v-validate="'required'" type="text" name="language" class="form-control"
                               v-model.trim="inputlangs.name" maxlength="20" placeholder="Type in a language…"/>
                      </div>
                    </div>
                    <div class="cwc position-relative">
                      <i v-if="errors.first('language-level')"
                         class="indelicon fa fa-exclamation position-absolute right comp"></i>
                      <p class="label-desc" style="opacity: 0">{{ $t('How proficient are you in it? *') }}
                      </p>
                      <label>{{ $t('How proficient are you in it? *') }}</label>
                      <select :class="{ error: errors.first('language-level') }" v-validate="'required'"
                              v-for="(inputlangs,k) in form.langs" :key="k"
                              class="form-control compentry language" v-model.trim="inputlangs.level" name="language-level"
                              required>
                        <option value="">{{ $t('Choose a Proficiency…') }}</option>
                        <option :value="$t('Basic communication')">{{ $t('Basic communication') }}</option>
                        <option :value="$t('Intermediate')">{{ $t('Intermediate') }}</option>
                        <option :value="$t('Advanced')">{{ $t('Advanced') }}</option>
                        <option :value="$t('Fluent')">{{ $t('Fluent') }}</option>
                        <option :value="$t('Native Speaker')">{{ $t('Native Speaker') }}</option>
                      </select>
                    </div>
                    <div class="text-center cfa-div" v-if="form.langs.length < 5">
                      <button type="button" class="btn btn-primary" @click="addLanginput()">
                        {{ $t('Add a language') }}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="work-container cv-sec col-md-12">
                  <p class="cvb-title">{{ $t('Work Experience') }}</p>
                  <p class="cvb-desc">{{ $t('Add a maximum of 3 experiences') }}</p>
                  <div v-for="(inputexp,k) in form.exprs" class="entry" :key="k">
                    <label>{{ $t('Company') }}</label>
                    <div class="fieldwithbin">
                      <i v-if="k > 0" class="indelicon fa fa-trash-o"
                         @click="removeEXPinput(k)"></i>
                      <input type="text" class="form-control" maxlength="40" v-model.trim="inputexp.company"
                             placeholder="Name of the Company…"/>
                    </div>
                    <div class="btm-fields">
                      <div class="position">
                        <label>{{ $t('Position') }}</label>
                        <input type="text" class="form-control" maxlength="40" v-model.trim="inputexp.position"
                               placeholder="Type in your role…">
                      </div>
                      <div class="duration">
                        <label>{{ $t('Duration') }}</label>
                        <div class="expdateset">
                          <input class="form-control" type="text" maxlength="5"
                                 v-model.trim="inputexp.startdate" placeholder="MM/YY">
                          <span>{{ $t('to') }}</span>
                          <input class="form-control" type="text" maxlength="5"
                                 v-model.trim="inputexp.enddate" placeholder="MM/YY">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt15" v-if="form.exprs.length < 3">
                    <button type="button" class="btn btn-primary" @click="addEXPinput()">
                      {{ $t('Add an Experience') }}
                    </button>
                  </div>
                </div>
                <div class="work-container cv-sec col-md-12">
                  <p class="cvb-title">{{ $t('Education *') }}</p>
                  <p class="cvb-desc">{{ $t('Add a maximum of 2 qualifications') }}</p>
                  <div v-for="(inputedu,k) in form.edu" class="entry" :key="k">
                    <label>{{ $t('Institution *') }}</label>
                    <div class="fieldwithbin position-relative">
                      <i v-if="errors.first('institution')"
                         class="indelicon fa fa-exclamation position-absolute left edu"></i>
                      <i v-if="k > 0" class="indelicon fa fa-trash-o"
                         @click="removeEDUinput(k)"></i>
                      <input :class="{ error: errors.first('institution') }" maxlength="40" v-validate="'required'"
                             type="text" name="institution" class="form-control" v-model.trim="inputedu.institute"
                             placeholder="Name of the Institution…"/>
                    </div>
                    <div class="btm-fields">
                      <div class="position position-relative">
                        <i v-if="errors.first('position')"
                           class="indelicon fa fa-exclamation position-absolute left edu"></i>
                        <label>{{ $t('Degree *') }}</label>
                        <input :class="{ error: errors.first('position') }" maxlength="40" v-validate="'required'"
                               type="text" class="form-control"
                               v-model.trim="inputedu.qualification" name="position"
                               placeholder="Type in your qualification… ">
                      </div>
                      <div class="duration position-relative">
                        <i v-if="errors.first('duration')"
                           class="indelicon fa fa-exclamation position-absolute right edu"></i>
                        <label>{{ $t('Duration *') }}</label>
                        <input :class="{ error: errors.first('duration') }" v-validate="'required'" class="form-control"
                               name="duration" type="text" v-model.trim="inputedu.duration"
                               placeholder="MM/YY to MM/YY">
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt15" v-if="form.edu.length < 2">
                    <button type="button" class="btn btn-primary" @click="addEDUinput()">
                      {{ $t('Add an Education') }}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="cv-preview col-md-6" >
            <div class="cvPreviewScroll">
              <div class="preview_form">
                <h2 class="view-title">{{ $t('Preview') }}</h2>
                <div class="preview-container" id="pdfcontent" ref="pdfcontent">
                  <div class="header row">
                    <div v-if="form.picture" class="picture-container col-md-2 align-self-center pr-0">
                      <p>
                        <img height="100" width="100" alt="Profile Picture" :src="form.picture"
                             class="picture img-fluid" style="border-radius: 7px;">
                      </p>
                    </div>
                    <div class="col-md-4 align-self-center">
                      <p v-if="form.first_name || form.last_name" class="u-name">{{
                          form.first_name
                        }}
                        {{ form.last_name }}</p>
                      <p v-if="!form.first_name && !form.last_name" class="u-name">Your Name</p>
                      <p class="u-email"><i
                          class="fa fa-envelope-o"></i>{{ form.email ? form.email : 'Email' }}
                      </p>
                    </div>
                    <div class="contact-info col-md-6 align-self-start">
                      <div class="row">
                        <div class="col-6">
                          <p><i
                              class="fa fa-volume-control-phone"></i>{{
                              form.phone ?
                                  form.phone : 'Phone number'
                            }}
                          </p>
                          <p v-if="form.linkedin"><i
                              class="fa fa-linkedin-square"></i>{{ form.linkedin }}</p>
                        </div>
                        <div class="col-6">
                          <div v-if="form.urls.length">
                            <p v-for="(inputurl, index) in form.urls" :key="index"><i
                                class="fa fa-globe"></i>{{ inputurl.url }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="body">
                    <div class="row">
                      <div class="sidebar col-md-4">
                        <div class="sidebar-content">
                          <div class="competencies">
                            <p class="sb-sec-title">{{ $t('Core Competencies:') }}</p>
                            <div class="skills-view comp-view">
                              <p class="com-title mb-0 pb-1">{{ $t('Skills') }}</p>
                              <div class="chart-container pb-1"
                                   style="height: 7rem; width: 100%;">
                                <radar-chart id="skillsChart" :labels="skillsLabels"
                                             :data="skillsRatings" :options="chartConfig"
                                             :colors="skillChartColors"></radar-chart>
                              </div>
                              <p class="com-title text-center">{{ skills.join(", ") }}</p>
                            </div>
                            <div class="traits-view comp-view">
                              <p class="com-title mb-0 pb-1">{{ $t('Personality Traits') }}</p>
                              <div class="chart-container pb-1"
                                   style="height: 7rem; width: 100%;">
                                <radar-chart id="traitsChart" :labels="traitsLabels"
                                             :data="traitsRatings" :options="chartConfig"
                                             :colors="traitChartColors"></radar-chart>
                              </div>
                              <p class="com-title text-center">{{ traits.join(", ") }}</p>
                            </div>
                          </div>
                          <div class="location-data">
                            <p class="sb-sec-title">{{ $t('Location:') }}</p>
                            <p class="loc-label">{{ $t('Country') }}:</p>
                            <p class="loc-value">
                              {{ form.country || 'NA' }}</p>
                            <p class="loc-label">{{ $t('City') }}:</p>
                            <p class="loc-value">
                              {{ form.city || 'NA' }}</p>
                            <p class="loc-label">{{ $t('Preferred work place:') }}</p>
                            <p class="loc-value">
                              {{ form.worklocation || 'NA' }}</p>
                            <p class="loc-label">{{ $t('Willing to relocate:') }}</p>
                            <p class="loc-value">
                              {{ form.relocate || 'NA' }}</p>
                            <p class="loc-label">{{ $t('Available from:') }}</p>
                            <p class="loc-value">
                              {{ form.joindate || 'NA' }}</p>
                            <p class="loc-value">
                              {{ form.uploadphoto || 'NA' }}</p>  
                          </div>
                        </div>
                      </div>
                      <div class="content col-md-7">
                        <div class="profile bodysec">
                          <p class="body-content-title"><i class="fa fa-user"></i>{{ $t('PROFILE') }}</p>
                          <p class="u-bio-text">{{ form.bio }}</p>
                          <div class="pref-pos">
                            <p v-if="form.positions.length" class="pp-ttile">{{ $t('Preferred Positions:') }}</p>
                            <p class="pp-text">
                                                            <span v-for="(pos,k) in form.positions" :key="k">
                                                                <span>{{ pos }}</span><span
                                                                v-if="k+1 < form.positions.length">, </span>
                                                            </span>
                            </p>
                          </div>
                        </div>
                        <div class="experience bodysec">
                          <p class="body-content-title"><i class="fa fa-briefcase"></i>{{ $t('Work Experience') }}</p>
                          <div v-for="(exp,k) in form.exprs" class="expetry sentry" :key="k">
                            <div>
                              <p v-if="exp.enddate && exp.startdate">{{ exp.startdate }} {{ $t('to') }}
                                {{ exp.enddate }}</p>
                            </div>
                            <div>
                              <p class="f500">{{ exp.company }}</p>
                              <p>{{ exp.position }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="education bodysec">
                          <p class="body-content-title"><i class="fa fa-book"></i>{{ $t('EDUCATION') }}</p>
                          <div v-for="(edu,k) in form.edu" class="eduentry sentry" :key="k">
                            <div>
                              <p>{{ edu.duration }}</p>
                            </div>
                            <div>
                              <p class="f500">{{ edu.institute }}</p>
                              <p>{{ edu.qualification }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="languages bodysec">
                          <p class="body-content-title"><i class="fa fa-language"></i>{{ $t('LANGUAGES') }}
                          </p>
                          <div v-for="(lang,k) in form.langs" class="langentry sentry" :key="k">
                            <div class="entry">
                              <p class="f500">{{ lang.name }}</p>
                              <p>{{ lang.level }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cv-footer">
                    <img src="/img/passio-white.png"/>
                  </div>
                </div>
              </div>
              <div class="cv-download-cfa">
                <div class="form-group">
                  <div class="form-check">
                    <input v-validate="'required'" class="form-check-input" name="privacy-policy" type="checkbox" id="policyLabel" v-model="acceptPolicy">
                    <label class="form-check-label" for="policyLabel">I agree to the <router-link to="/privacy-policy">GDPR and data policy *</router-link></label>
                    <p class="text-danger" v-if="errors.first('privacy-policy')"><small>You need to accept to our policies to create a CV</small></p>
                  </div>
                </div>
                <button type="button" class="btn" @click="downloadPdf()">{{ $t('Get a Copy!') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="footer">
      <div class="left-content">
        <p class="copyright">&copy; BøthOfUs AB. All Rights Reserved.</p>
<!--        <p class="prvplcy"><a href="/privacy-policy">Privacy Policy</a></p>-->
      </div>
      <div class="right-content d-flex">
        <div class="mr-4 social-icons">
<!--          <a href="https://www.facebook.com/passiojob/" class="fa fa-facebook" target="_blank"></a>-->
<!--          <a href="https://www.linkedin.com/company/passio-jobs/" class="fa fa-linkedin" target="_blank"></a>-->
        </div>
        <p class="m-0">
          <span class="mr-2">An initiative by</span>
          <a href="http://bothofus.se/" target="_blank"><img src="/img/bou-logo-gray.png"/></a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>

import RadarChart from "../components/Charts/RadarChart";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import Multiselect from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.min.css";
import $ from 'jquery';
import countries from "../utils/countries";
import axios from 'axios';
import VeeValidate from "vee-validate";
import { languages } from '@/i18n';
import {initializeApp} from "firebase/app";
import {getAnalytics, logEvent} from "firebase/analytics";
export default {
  name: 'Home',
  components: {
    RadarChart,
    DatePicker,
    Multiselect
  },
  data() {
    return {
      languageArray: languages,
      format: 'DD/MM/YYYY',
      position_options: ["Marketing Specialist",
        "Marketing Manager",
        "Marketing Director",
        "Graphic Designer",
        "Marketing Research Analyst",
        "Marketing Communications Manager",
        "Marketing Consultant",
        "Product Manager",
        "Public Relations",
        "Social Media Assistant",
        "Brand Manager",
        "SEO Manager",
        "Content Marketing Manager",
        "Copywriter",
        "Media Buyer",
        "Digital Marketing Manager",
        "eCommerce Marketing Specialist",
        "Brand Strategist",
        "Vice President of Marketing",
        "Media Relations Coordinator",
        "Administrative Assistant",
        "Receptionist",
        "Office Manager",
        "Auditing Clerk",
        "Bookkeeper",
        "Account Executive",
        "Branch Manager",
        "Business Manager",
        "Quality Control Coordinator",
        "Administrative Manager",
        "Chief Executive Officer",
        "Business Analyst",
        "Risk Manager",
        "Human Resources",
        "Office Assistant",
        "Secretary",
        "Office Clerk",
        "File Clerk",
        "Account Collector",
        "Administrative Specialist",
        "Executive Assistant",
        "Program Administrator",
        "Program Manager",
        "Administrative Analyst",
        "Data Entry",
        "CEO—Chief Executive Officer",
        "COO—Chief Operating Officer",
        "CFO—Chief Financial Officer",
        "CIO—Chief Information Officer",
        "CTO—Chief Technology Officer",
        "CMO—Chief Marketing Officer",
        "CHRO—Chief Human Resources Officer",
        "CDO—Chief Data Officer",
        "CPO—Chief Product Officer",
        "CCO—Chief Customer Officer",
        "Team Leader",
        "Manager",
        "Assistant Manager",
        "Executive",
        "Director",
        "Coordinator",
        "Administrator",
        "Controller",
        "Officer",
        "Organizer",
        "Supervisor",
        "Superintendent",
        "Head",
        "Overseer",
        "Chief",
        "Foreman",
        "Controller",
        "Principal",
        "President",
        "Lead",
        "Computer Scientist",
        "IT Professional",
        "UX Designer & UI Developer",
        "SQL Developer",
        "Web Designer",
        "Web Developer",
        "Help Desk Worker/Desktop Support",
        "Software Engineer",
        "Data Entry",
        "DevOps Engineer",
        "Computer Programmer",
        "Network Administrator",
        "Information Security Analyst",
        "Artificial Intelligence Engineer",
        "Cloud Architect",
        "IT Manager",
        "Technical Specialist",
        "Application Developer",
        "Chief Technology Officer (CTO)",
        "Chief Information Officer (CIO)",
        "Sales Associate",
        "Sales Representative",
        "Sales Manager",
        "Retail Worker",
        "Store Manager",
        "Sales Representative",
        "Sales Manager",
        "Real Estate Broker",
        "Sales Associate",
        "Cashier",
        "Store Manager",
        "Account Executive",
        "Account Manager",
        "Area Sales Manager",
        "Direct Salesperson",
        "Director of Inside Sales",
        "Outside Sales Manager",
        "Sales Analyst",
        "Market Development Manager",
        "B2B Sales Specialist",
        "Sales Engineer",
        "Merchandising Associate",
        "Construction Worker",
        "Taper",
        "Plumber",
        "Heavy Equipment Operator",
        "Vehicle or Equipment Cleaner",
        "Carpenter",
        "Electrician",
        "Painter",
        "Welder",
        "Handyman",
        "Boilermaker",
        "Crane Operator",
        "Building Inspector",
        "Pipefitter",
        "Sheet Metal Worker",
        "Iron Worker",
        "Mason",
        "Roofer",
        "Solar Photovoltaic Installer",
        "Well Driller",
        "Office Manager",
        "Receptionist",
        "Virtual Assistant",
        "Customer Service",
        "Customer Support",
        "Concierge",
        "Help Desk",
        "Customer Service Manager",
        "Technical Support Specialist",
        "Account Representative",
        "Client Service Specialist",
        "Customer Care Associate",
        "Operations Manager",
        "Operations Assistant",
        "Operations Coordinator",
        "Operations Analyst",
        "Operations Director",
        "Vice President of Operations",
        "Operations Professional",
        "Scrum Master",
        "Continuous Improvement Lead",
        "Continuous Improvement Consultant",
        "Credit Authorizer",
        "Benefits Manager",
        "Credit Counselor",
        "Accountant",
        "Bookkeeper",
        "Accounting Analyst",
        "Accounting Director",
        "Accounts Payable/Receivable Clerk",
        "Auditor",
        "Budget Analyst",
        "Controller",
        "Financial Analyst",
        "Finance Manager",
        "Economist",
        "Payroll Manager",
        "Payroll Clerk",
        "Financial Planner",
        "Financial Services Representative",
        "Finance Director",
        "Commercial Loan Officer",
        "Engineer",
        "Mechanical Engineer",
        "Civil Engineer",
        "Electrical Engineer",
        "Assistant Engineer",
        "Chemical Engineer",
        "Chief Engineer",
        "Drafter",
        "Engineering Technician",
        "Geological Engineer",
        "Biological Engineer",
        "Maintenance Engineer",
        "Mining Engineer",
        "Nuclear Engineer",
        "Petroleum Engineer",
        "Plant Engineer",
        "Production Engineer",
        "Quality Engineer",
        "Safety Engineer",
        "Sales Engineer",
        "Chief People Officer",
        "VP of Miscellaneous Stuff",
        "Chief Robot Whisperer",
        "Director of First Impressions",
        "Culture Operations Manager",
        "Director of Ethical Hacking",
        "Software Ninjaneer",
        "Director of Bean Counting",
        "Digital Overlord",
        "Director of Storytelling",
        "Researcher",
        "Research Assistant",
        "Data Analyst",
        "Business Analyst",
        "Financial Analyst",
        "Biostatistician",
        "Title Researcher",
        "Market Researcher",
        "Title Analyst",
        "Medical Researcher",
        "Mentor",
        "Tutor/Online Tutor",
        "Teacher",
        "Teaching Assistant",
        "Substitute Teacher",
        "Preschool Teacher",
        "Test Scorer",
        "Online ESL Instructor",
        "Professor",
        "Assistant Professor",
        "Graphic Designer",
        "Artist",
        "Interior Designer",
        "Video Editor",
        "Video or Film Producer",
        "Playwright",
        "Musician",
        "Novelist/Writer",
        "Computer Animator",
        "Photographer",
        "Camera Operator",
        "Sound Engineer",
        "Motion Picture Director",
        "Actor",
        "Music Producer",
        "Director of Photography",
        "Nurse",
        "Travel Nurse",
        "Nurse Practitioner",
        "Doctor",
        "Caregiver",
        "CNA",
        "Physical Therapist",
        "Pharmacist",
        "Pharmacy Assistant",
        "Medical Administrator",
        "Medical Laboratory Tech",
        "Physical Therapy Assistant",
        "Massage Therapy",
        "Dental Hygienist",
        "Orderly",
        "Personal Trainer",
        "Massage Therapy",
        "Medical Laboratory Tech",
        "Phlebotomist",
        "Medical Transcriptionist",
        "Telework Nurse/Doctor",
        "Reiki Practitioner",
        "Housekeeper",
        "Flight Attendant",
        "Travel Agent",
        "Hotel Front Door Greeter",
        "Bellhop",
        "Cruise Director",
        "Entertainment Specialist",
        "Hotel Manager",
        "Front Desk Associate",
        "Front Desk Manager",
        "Concierge",
        "Group Sales",
        "Event Planner",
        "Porter",
        "Spa Manager",
        "Wedding Coordinator",
        "Cruise Ship Attendant",
        "Casino Host",
        "Hotel Receptionist",
        "Reservationist",
        "Events Manager",
        "Meeting Planner",
        "Lodging Manager",
        "Director of Maintenance",
        "Valet",
        "Waiter/Waitress",
        "Server",
        "Chef",
        "Fast Food Worker",
        "Barista",
        "Line Cook",
        "Cafeteria Worker",
        "Restaurant Manager",
        "Wait Staff Manager",
        "Bus Person",
        "Restaurant Chain Executive",
        "Political Scientist",
        "Chemist",
        "Conservation Scientist",
        "Sociologist",
        "Biologist",
        "Geologist",
        "Physicist",
        "Astronomer",
        "Atmospheric Scientist",
        "Molecular Scientist",
        "Call Center Representative",
        "Customer Service",
        "Telemarketer",
        "Telephone Operator",
        "Phone Survey Conductor",
        "Dispatcher for Trucks or Taxis",
        "Customer Support Representative",
        "Over the Phone Interpreter",
        "Phone Sales Specialist",
        "Mortgage Loan Processor",
        "Counselor",
        "Mental Health Counselor",
        "Addiction Counselor",
        "School Counselor",
        "Speech Pathologist",
        "Guidance Counselor",
        "Social Worker",
        "Therapist",
        "Life Coach",
        "Couples Counselor",
        "Beautician",
        "Hair Stylist",
        "Nail Technician",
        "Cosmetologist",
        "Salon Manager",
        "Makeup Artist",
        "Esthetician",
        "Skin Care Specialist",
        "Manicurist",
        "Barber",
        "Journalist",
        "Copy Editor",
        "Editor/Proofreader",
        "Content Creator",
        "Speechwriter",
        "Communications Director",
        "Screenwriter",
        "Technical Writer",
        "Columnist",
        "Public Relations Specialist",
        "Proposal Writer",
        "Content Strategist",
        "Grant Writer",
        "Video Game Writer",
        "Translator",
        "Film Critic",
        "Copywriter",
        "Travel Writer",
        "Social Media Specialist",
        "Ghostwriter",
        "Truck Driver",
        "Heavy Equipment Operator",
        "Welding",
        "Physical Therapy Assistant",
        "Housekeeper",
        "Landscaping Worker",
        "Landscaping Assistant",
        "Mover",
        "Animal Breeder",
        "Veterinary Assistant",
        "Farm Worker",
        "Animal Shelter Worker",
        "Dog Walker / Pet Sitter",
        "Zoologist",
        "Animal Trainer",
        "Service Dog Trainer",
        "Animal Shelter Manager",
        "Animal Control Officer",
        "Delivery Driver",
        "School Bus Driver",
        "Truck Driver",
        "Tow Truck Operator",
        "UPS Driver",
        "Mail Carrier",
        "Recyclables Collector",
        "Courier",
        "Bus Driver",
        "Cab Driver",
        "Office Volunteer",
        "Animal Shelter Volunteer",
        "Hospital Volunteer",
        "Youth Volunteer",
        "Food Kitchen Worker",
        "Homeless Shelter Worker",
        "Conservation Volunteer",
        "Meals on Wheels Driver",
        "Habitat for Humanity Builder",
        "Emergency Relief Worker",
        "Red Cross Volunteer",
        "Community Food Project Worker",
        "Women’s Shelter Jobs",
        "Suicide Hotline Volunteer",
        "School Volunteer",
        "Community Volunteer Jobs",
        "Sports Volunteer",
        "Church Volunteer",
        "Archivist",
        "Actuary",
        "Architect",
        "Personal Assistant",
        "Entrepreneur",
        "Security Guard",
        "Mechanic",
        "Recruiter",
        "Mathematician",
        "Locksmith",
        "Management Consultant",
        "Shelf Stocker",
        "Caretaker or House Sitter",
        "Library Assistant",
        "Translator",
        "HVAC Technician",
        "Attorney",
        "Paralegal",
        "Executive Assistant",
        "Personal Assistant",
        "Bank Teller",
        "Parking Attendant",
        "Machinery Operator",
        "Manufacturing Assembler",
        "Funeral Attendant",
        "Assistant Golf Professional",
        "Yoga Instructor"
      ],
      wordcounter: 0,
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        worklocation: '',
        joindate: '',
        picture: null,
        linkedin: '',
        country: '',
        city: '',
        positions: '',
        available_from: '',
        relocate: '',
        bio: '',
        urls: [{
          url: '',
          class: 'form-group',
        }],
        exprs: [{
          company: '',
          position: '',
          startdate: '',
          enddate: '',
        }],
        edu: [{
          institute: '',
          qualification: '',
          duration: '',
        }],
        skills: [{
          name: '',
          rating: '',
        }],
        traits: [{
          name: '',
          rating: '',
        }],
        langs: [{
          name: '',
          level: '',
        }],
      },
      chartConfig: {
        responsive: true,
        maintainAspectRatio: true,
        bezierCurve: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        legend: {
          display: false,
          position: 'top',
          labels: {
            fontSize: 10
          }
        },
        title: {
          display: false,
          text: ''
        },
        scale: {
          ticks: {
            display: false,
            beginAtZero: false,
            maxTicksLimit: 5,
          },
          pointLabels: {
            fontSize: 10
          },
          gridLines: {
            color: "#989da4"
          },
          angleLines: {
            color: "#989da4"
          }
        },
        tooltips: {
          display: false
        }
      },
      skillsRadar: null,
      skillsLabels: [],
      traitsLabels: [],
      skillsRatings: [],
      traitsRatings: [],
      jsPDF: null,
      skillChartColors: {
        background: "rgba(22, 22, 22, 1)",
        border: "#6db98f"
      },
      traitChartColors: {
        background: "rgba(22, 22, 22, 1)",
        border: "#eb887f"
      },
      skills: [],
      traits: [],
      submitForm: false,
      emptyChart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAYAAABRorhPAAACnUlEQVR4Xu3SMQ0AAAzDsJU/6ZHI6QLoEXlnCsQFFv+5U+CggiAvAFWe1CFUDOQFoMqTOoSKgbwAVHlSh1AxkBeAKk/qECoG8gJQ5UkdQsVAXgCqPKlDqBjIC0CVJ3UIFQN5AajypA6hYiAvAFWe1CFUDOQFoMqTOoSKgbwAVHlSh1AxkBeAKk/qECoG8gJQ5UkdQsVAXgCqPKlDqBjIC0CVJ3UIFQN5AajypA6hYiAvAFWe1CFUDOQFoMqTOoSKgbwAVHlSh1AxkBeAKk/qECoG8gJQ5UkdQsVAXgCqPKlDqBjIC0CVJ3UIFQN5AajypA6hYiAvAFWe1CFUDOQFoMqTOoSKgbwAVHlSh1AxkBeAKk/qECoG8gJQ5UkdQsVAXgCqPKlDqBjIC0CVJ3UIFQN5AajypA6hYiAvAFWe1CFUDOQFoMqTOoSKgbwAVHlSh1AxkBeAKk/qECoG8gJQ5UkdQsVAXgCqPKlDqBjIC0CVJ3UIFQN5AajypA6hYiAvAFWe1CFUDOQFoMqTOoSKgbwAVHlSh1AxkBeAKk/qECoG8gJQ5UkdQsVAXgCqPKlDqBjIC0CVJ3UIFQN5AajypA6hYiAvAFWe1CFUDOQFoMqTOoSKgbwAVHlSh1AxkBeAKk/qECoG8gJQ5UkdQsVAXgCqPKlDqBjIC0CVJ3UIFQN5AajypA6hYiAvAFWe1CFUDOQFoMqTOoSKgbwAVHlSh1AxkBeAKk/qECoG8gJQ5UkdQsVAXgCqPKlDqBjIC0CVJ3UIFQN5AajypA6hYiAvAFWe1CFUDOQFoMqTOoSKgbwAVHlSh1AxkBeAKk/qECoG8gJQ5UkdQsVAXgCqPKlDqBjIC0CVJ3UIFQN5AajypA6hYiAvAFWe1CFUDOQFHi31AJYdqeskAAAAAElFTkSuQmCC",
      countries: countries,
      loading: false,
      analytics: null,
      acceptPolicy: false,
    }
  },
  methods: {
    addURLinput() {
      if (this.form.urls.length < 2) {
        this.form.urls.push({
          url: '',
          class: 'form-group extra-field',
        });
      }
    },
    removeURLinput(index) {
      this.form.urls.splice(index, 1);
    },
    addEXPinput() {
      if (this.form.exprs.length < 3) {
        this.form.exprs.push({
          company: '',
          position: '',
          startdate: '',
          enddate: '',
        })
      }
    },
    removeEXPinput(index) {
      this.form.exprs.splice(index, 1);
    },
    addEDUinput() {
      if (this.form.edu.length < 2) {
        this.form.edu.push({
          institute: '',
          qualification: '',
          duration: '',
        })
      }
    },
    removeEDUinput(index) {
      this.form.edu.splice(index, 1);
    },
    addSkillinput() {
      if (this.form.skills.length < 5) {
        this.form.skills.push({
          name: '',
          rating: '',
        })
      }
      this.updateChart();
    },
    addTraitinput() {
      if (this.form.traits.length < 5) {
        this.form.traits.push({
          name: '',
          rating: '',
        })
      }
      this.updateChart();
    },
    updateChart() {
      this.skillsLabels = [];
      this.skillsRatings = [];
      this.skills = [];
      let labels = this.form.skills;
      labels.forEach((element) => {
        this.skillsLabels.push(element.name.slice(0, 3) + "..");
        this.skills.push(element.name);
      });
      let data = this.form.skills;
      data.forEach((element) => {
        this.skillsRatings.push(element.rating);
      });

      this.traitsLabels = [];
      this.traitsRatings = [];
      this.traits = [];
      labels = this.form.traits;
      labels.forEach((element) => {
        this.traitsLabels.push(element.name.slice(0, 3) + "..");
        this.traits.push(element.name);
      });
      data = this.form.traits;
      data.forEach((element) => {
        this.traitsRatings.push(element.rating);
      });
    },
    addLanginput() {
      if (this.form.langs.length < 5) {
        this.form.langs.push({
          name: '',
          level: '',
        })
      }
    },
    removeLanginput(index) {
      this.form.langs.splice(index, 1);
    },
    getDate() {
      console.log('hi');
    },
    addWordCounter() {
      if (this.wordcounter < 150) {
        this.wordcounter = this.form.bio.length;
      }
    },
    downloadPdf() {
      if (!this.form.picture){
        this.$noty.error("Please select a profile picture");
        return
      }
      this.loading = true;
      this.form.skills.push({
        name: '',
        rating: '',
      });
      this.form.traits.push({
        name: '',
        rating: '',
      });
      this.form.skills.pop();
      this.form.traits.pop();
      this.$validator.validateAll().then((result) => {
        this.submitForm = true;
        if (!result) {
          this.loading = false;
          window.scrollTo(0, document.querySelector('#aheader-nav').scrollTop);
          return;
        }
        this.updateChart();
        let skillsChart = document.querySelector("#skillsChart > canvas");
        let traitsChart = document.querySelector("#traitsChart > canvas");
        let data = new FormData();
        data.append('skills-chart', skillsChart.toDataURL());
        data.append('traits-chart', traitsChart.toDataURL());
        data.append('form', JSON.stringify(this.form));
        data.append('picture', this.form.picture);
        data.append('lang', this.$i18n.locale);
        if (skillsChart.toDataURL() == this.emptyChart) {
          this.updateChart();
          skillsChart = document.querySelector("#skillsChart > canvas");
          traitsChart = document.querySelector("#traitsChart > canvas");
          data.append('skills-chart', skillsChart.toDataURL());
          data.append('traits-chart', traitsChart.toDataURL());
        }
        logEvent(this.analytics, 'generate_cv', {
          name: this.form.first_name + " " + this.form.last_name,
          email: this.form.email,
          city: this.form.city,
        });
        axios({
          method: "POST",
          url: `cv/generate`,
          data: data,
          headers: {
            "content-type": "multipart/form-data"
          }
        }).then(
            result => {
              this.loading = false;
              if (result) {
                this.form = {
                  first_name: '',
                      last_name: '',
                      email: '',
                      phone: '',
                      worklocation: '',
                      joindate: '',
                      picture: null,
                      linkedin: '',
                      country: '',
                      city: '',
                      positions: '',
                      available_from: '',
                      relocate: '',
                      bio: '',
                      urls: [{
                    url: '',
                    class: 'form-group',
                  }],
                      exprs: [{
                    company: '',
                    position: '',
                    startdate: '',
                    enddate: '',
                  }],
                      edu: [{
                    institute: '',
                    qualification: '',
                    duration: '',
                  }],
                      skills: [{
                    name: '',
                    rating: '',
                  }],
                      traits: [{
                    name: '',
                    rating: '',
                  }],
                      langs: [{
                    name: '',
                    level: '',
                  }],
                };
                this.chartConfig = {
                  responsive: true,
                      maintainAspectRatio: true,
                      bezierCurve: false,
                      layout: {
                    padding: {
                      left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0
                    }
                  },
                  legend: {
                    display: false,
                        position: 'top',
                        labels: {
                      fontSize: 10
                    }
                  },
                  title: {
                    display: false,
                        text: ''
                  },
                  scale: {
                    ticks: {
                      display: false,
                          beginAtZero: false,
                          maxTicksLimit: 5,
                    },
                    pointLabels: {
                      fontSize: 10
                    },
                    gridLines: {
                      color: "#989da4"
                    },
                    angleLines: {
                      color: "#989da4"
                    }
                  },
                  tooltips: {
                    display: false
                  }
                };
                this.skillsRadar = null;
                this.skillsLabels = [];
                this.traitsLabels = [];
                this.skillsRatings = [];
                this.traitsRatings = [];
                this.skills = [];
                this.traits = [];
                this.$noty.success("Your CV has been sent to your email!");
                this.submitForm = false;
                this.$nextTick(() => {
                  this.errors.clear();
                  this.$nextTick(() => {
                    this.$validator.reset();
                  });
                });
                window.scrollTo(0, document.querySelector('#aheader-nav').scrollTop);
              }
            },
            error => {
              this.loading = false;
              console.log(error);
              this.$noty.error("Something went wrong");
            }
        );
      }).catch(() => {
      });
    },
    addPicture(fileList) {
      // this.form.picture = fileList[0];
      // console.log(this.form.picture);
      let reader = new FileReader();
      reader.onload = (e) => {
        this.form.picture = e.target.result;
      };

      reader.readAsDataURL(fileList[0]);
    },
    removePicture() {
      this.form.picture = "";
      this.$refs.picture.value = "";
    }
  },
  mounted: function () {
    // var docHeight = document.body.scrollHeight;
    if (!window.matchMedia('(max-width: 767px)').matches) {
      $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() < 1820) {
          $(".cvPreviewScroll").stop().animate({
            "marginTop": ($(window).scrollTop()) + "px",
            "marginLeft": ($(window).scrollLeft()) + "px"
          }, "slow");
        }
      });
    }
    const phoneRule = {
      // eslint-disable-next-line no-unused-vars
      getMessage(field, args) {
        return `The ${field} must be a valid phone number`;
      },
      // eslint-disable-next-line no-unused-vars
      validate(value, args) {

        // Custom regex for a phone number
        const MOBILEREG = /^\+?[0-9]{5,15}$/;

        // Check for either of these to return true
        return MOBILEREG.test(value);
      }
    };
    VeeValidate.Validator.extend('phone', phoneRule);


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDwaxRocD2w618O4TZQBZ72JlgPifcOKng",
      authDomain: "cv-builder-7d900.firebaseapp.com",
      projectId: "cv-builder-7d900",
      storageBucket: "cv-builder-7d900.appspot.com",
      messagingSenderId: "679491820850",
      appId: "1:679491820850:web:9a632bd44c90fe2e5acb2b"
    };

// Initialize Firebase
    initializeApp(firebaseConfig);
    this.analytics = getAnalytics();
    logEvent(this.analytics, 'screen_view', {
      firebase_screen: 'Home - CV Builder',
      firebase_screen_class: 'homePage'
    });
  },
  computed: {
    lang: {
      get: function() {
        return this.$store.state.locale
      },
      set: function(newVal) {
        this.$store.dispatch('changeLocale', newVal)
      }
    }
  }
}
</script>
<style>
.multiselect__content-wrapper{
  min-height: 200px !important;
}


</style>
