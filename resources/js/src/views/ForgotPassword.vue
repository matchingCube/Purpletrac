<template>
    <div class="auth-wrapper auth-v2">
        <b-row class="auth-inner m-0">
            <!-- Brand logo-->
            <b-link class="brand-logo">
                <b-img :src="leftTopLogo" alt="logo" class="left-top-logo" />
                <!-- <h2 class="brand-text text-primary ml-1">Vuexy</h2> -->
            </b-link>
            <!-- /Brand logo-->

            <!-- Login-->
            <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
                <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
                    <b-card-title
                        title-tag="h2"
                        class="font-weight-bold text-primary mb-1"
                    >
                        Forgot Password? 🔒
                    </b-card-title>
                    <b-card-text class="mb-2 font-medium-1">
                        Do you want to reset your password?<br />Just let us
                        know your email address and we will email you a password
                        reset link that will allow you to choose a new one.
                    </b-card-text>

                    <!-- form -->
                    <validation-observer ref="loginValidation">
                        <b-form class="auth-login-form mt-2" @submit.prevent>
                            <!-- email -->
                            <b-form-group>
                                <label
                                    class="font-medium-2 font-weight-bold"
                                    for="login-email"
                                    >Email
                                </label>
                                <validation-provider
                                    #default="{ errors }"
                                    name="Email"
                                    rules="required|email"
                                >
                                    <b-form-input
                                        class="form-control-lg"
                                        id="login-email"
                                        v-model="userEmail"
                                        :state="
                                            errors.length > 0 ? false : null
                                        "
                                        name="login-email"
                                        placeholder="john@example.com"
                                    />
                                    <small class="text-danger font-medium-1">{{
                                        errors[0]
                                    }}</small>
                                </validation-provider>
                            </b-form-group>

                            <!-- submit buttons -->
                            <b-button
                                class="btn-lg"
                                type="submit"
                                variant="primary"
                                block
                                @click="validationForm"
                            >
                                Email Password Reset Link
                            </b-button>
                        </b-form>
                    </validation-observer>
                    <p class="text-center font-medium-1 font-weight-bold mt-2">
                        <b-link
                            :to="{ name: 'login' }"
                            class="d-flex text-info align-items-center justify-content-center"
                        >
                            <feather-icon icon="ChevronLeftIcon" size="18" />
                            Back to Login
                        </b-link>
                    </p>
                </b-col>
            </b-col>
            <!-- /Login-->

            <!-- Left Text-->
            <b-col
                lg="8"
                class="d-none d-lg-flex align-items-center p-0 login-background bg-cover"
            >
                <div
                    class="login-background-overlay w-100 h-100 d-lg-flex align-items-center justify-content-center p-0"
                >
                    <b-img
                        fluid
                        class="logo-on-back"
                        :src="backLogo"
                        alt="Logo"
                    />
                </div>
            </b-col>
            <!-- /Left Text-->

            <!-- Footer link -->
            <div class="footer-link">
                <b-link
                    class="text-white font-small-5"
                    href="https://www.groundforcetrucking.com/"
                    target="_blank"
                >
                    Purpletrac &copy; 2022
                </b-link>
            </div>
            <!-- /Footer link -->
        </b-row>
    </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
} from "bootstrap-vue";
import { required, email } from "@validations";
import store from "@/store/index";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
    components: {
        BRow,
        BCol,
        BLink,
        BFormGroup,
        BFormInput,
        BInputGroupAppend,
        BInputGroup,
        BFormCheckbox,
        BCardText,
        BCardTitle,
        BImg,
        BForm,
        BButton,
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            userEmail: "",
            sideImg: require("@/assets/images/myPhotos/back_new.png"),
            backLogo: require("@/assets/images/myPhotos/vertical-logo-wholewhite.svg"),
            leftTopLogo: require("@/assets/images/myPhotos/horizontal-logo-purple.svg"),
            // validation rulesimport store from '@/store/index'
            required,
            email,
        };
    },
    computed: {
        imgUrl() {
            if (store.state.appConfig.layout.skin === "dark") {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.sideImg = require("@/assets/images/myPhotos/back1_sm.jpg");
                return this.sideImg;
            }
            return this.sideImg;
        },
    },
    methods: {
        validationForm() {
            this.$refs.loginValidation.validate().then((success) => {
                if (success) {
                    this.$toast({
                        component: ToastificationContent,
                        props: {
                            title: "Email Password Reset Link in Successfully",
                            icon: "EditIcon",
                            variant: "success",
                        },
                    });
                }
            });
        },
    },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
