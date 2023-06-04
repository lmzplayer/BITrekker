<template>
    <div>
        <div>
            <h2>head</h2>
        </div>
        <div>
            <h2>head1</h2>
            <UserPage></UserPage>
            <h2>head2</h2>
        </div>
    </div>
</template>

<script>
    import UserPage from './pages/UserPage'
    export default {
        name:'App',
        comments:{
            UserPage
        }
    }
</script>
