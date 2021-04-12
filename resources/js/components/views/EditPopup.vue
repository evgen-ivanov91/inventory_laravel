<template>
    <div class="popup_wrapper" ref="popup_wrapper">
        <div class="v-popup">
            <div class="v-popup__header">
                <span>{{ popupTitle }}</span>
                <button type="button" class="btn-close" aria-label="Close"
                        @click="closeEdit"></button>
            </div>
            <div class="v-popup__content">
                <slot></slot>
            </div>
            <div class="v-popup__footer">
                <button type="button" class="btn btn-success"
                @click="okBtnAction">{{ okBtnTitle }}</button>
                <!--            <button type="button" class="btn btn-danger">Danger</button>-->
            </div>
        </div>
    </div>

</template>

<script>
export default {
name: "editPopup",
    props:{
    popupTitle:{
        type: String,
        default: 'Alert'
    },
    okBtnTitle:{
        type: String,
        default: 'OK'
    }
    },
    data(){
    return{

    }
    },
    methods:{
        okBtnAction(){
            this.$emit('okBtnAction')
        },
        closeEdit(){
            this.$emit('closeEdit')
        }
    },
    mounted() {
    let vm = this;
        document.addEventListener('click', function (item){
            if(item.target === vm.$refs['popup_wrapper']){
                vm.closeEdit()
            }
        })
    }
}
</script>

<style scoped>
.popup_wrapper{
    background: rgba(64,64,64, 0.2) ;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

}
.v-popup{
    backdrop-filter: blur(100px);
    padding: 15px;
    position: fixed;
    top: 30px;
    width: 60%;
    background: #b5b5b5;
    box-shadow: 0 0 17px 0 #e6e2c5;
    z-index: 10;
}
.v-popup__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.v-popup__content{
    display: flex;
    justify-content: center;
    align-items: center;
}
.v-popup__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
