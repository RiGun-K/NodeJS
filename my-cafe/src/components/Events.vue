<template>
    <div id="app">
        <h1>Event</h1>
        <h1>{{ event_title }}</h1>
    </div>
</template>

<script>
export default {
    name:'Event',
    props:['event_id'],
    computed:{
        event_title(){
            if(this.event_id=='1') {
                return '1+1';
            } else if(this.event_id){
                return 'Free Cookies'
            } else
                return ''
        }
    }
}
</script>