import HomeBtn from './components/HomeBtn';
import Spinner from './components/Spinner';
import SubmitButton from './components/SubmitButton';

export default {
    install(Vue) {
        Vue.component("home-btn", HomeBtn);
        Vue.component("spinner", Spinner);
        Vue.component("submit-btn", SubmitButton);

    }
};
