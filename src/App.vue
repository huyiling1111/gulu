<template>
<div>
    导航栏|
    <router-link to="/">Zero</router-link>|
    <router-link to="/xxx">Zero1 </router-link>
</div>
<router-view />
</template>

<script>
import Zero from './components/Zero.vue'

export default {
    name: 'App'
}
</script>
