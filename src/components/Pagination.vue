<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination float-right">
      <li class="page-item mr-2 page-arrow" aria-label="First page" v-if="page-1 > 0"
          @click="page = 1, currentPage = 1">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
        <span class="sr-only">First page</span>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" aria-label="Previous" @click="prev" v-if="page-1 > 0">
          <!-- <i class="fa fa-ellipsis-h" aria-hidden="true"></i> -->
          <img src="/img/icons/ellipsis-square.svg" alt="" width="13">
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="goToPage(page)"
           :class="{'active': page == currentPage}">
          {{page}}
        </a>
      </li>
      <li class="page-item" v-if="page+1 <= total">
        <a class="page-link" href="javascript:void(0)" @click="goToPage(page+1)"
           :class="{'active': page+1 == currentPage}">
          {{page+1}}
        </a>
      </li>
      <li class="page-item" v-if="page+2 <= total">
        <a class="page-link" href="javascript:void(0)" @click="goToPage(page+2)"
           :class="{'active': page+2 == currentPage}">
          {{page+2}}
        </a>
      </li>
      <li class="page-item" v-if="page+3 <= total">
        <a class="page-link" href="javascript:void(0)" aria-label="Next" @click="next">
          <!-- <i class="fa fa-ellipsis-h" aria-hidden="true"></i> -->
          <img src="/img/icons/ellipsis-square.svg" alt="" width="13">
          <span class="sr-only">Next</span>
        </a>
      </li>
      <li class="page-item ml-2 page-arrow" aria-label="Last page" v-if="page+3 <= total"
          @click="lastPage">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        <span class="sr-only">First page</span>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'pagination',
    components: {},
    props: {
      total: {
        type: Number,
        default: 1,
        description: "Total Number of pages"
      },
      propCurrentPage: {
        default: 1,
        description: "Current Page"
      },
    },
    watch: { 
      propCurrentPage: function() { // watch it
        this.currentPage = this.propCurrentPage;
        this.updatePagination();
      }
    },
    data: () => {
      return {
        page: 1,
        currentPage:1,
      }
    },
    methods: {
      next: function () {
        this.page += 3;
      },
      prev: function () {
        this.page = Math.max(this.page - 3, 1);
      },
      goToPage: function (page) {
        this.currentPage = page;
        this.fetchData();
      },
      lastPage: function(){
        if(this.total/3){
          this.page = this.total + 1 - this.total % 3;
        }else{
          this.page = this.total - 3;
        }
        this.currentPage = this.total;
      },
      fetchData: function() {
        this.$emit('fetchData', this.currentPage);
      },
      firstPage: function() {
        this.currentPage = 1;
        this.page = 1;
      },
      updatePagination:function(){
        if(counter < this.currentPage){
          var counter = 3;
          while(counter < this.currentPage){
            this.next();
            counter += 3;
          }
        }
        else{
          let counter = this.page;
          while(counter > this.currentPage){
            this.prev();
            counter -= 3;
          }
        }
      }
    },
    mounted() {
      this.currentPage = JSON.parse(JSON.stringify(this.propCurrentPage));
      this.updatePagination();
    }
  };
</script>

<style lang="scss" scoped>
.page-arrow i{
  font-size: 20px;
  color:#1e1e1e;
  margin-top: -2px;
}
.page-link{
  border-radius: 2px !important;
  background-color: transparent;
  border-color:#1e1e1e;
  width: 22px;
  height: 22px;
  font-size: 12px;
}
.page-link.active{
  background-color: #1e1e1e;
  color:#fff !important;
}
</style>
