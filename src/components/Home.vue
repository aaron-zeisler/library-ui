<template>
    <div>
        <h1>Welcome to the Library!</h1>
        
        <div id="nav">
            <div>
                <router-link to="/catalog">View the library's catalog of books</router-link>
            </div>
            <div>
                <router-link to="/check-out">Check out a book from the library</router-link>
            </div>
            <div>
                <router-link to="check-in">Check a book back into the library</router-link>
            </div>
        </div>
    </div>
</template>

<style>
#nav {
    margin-top: 50px;
}
#nav div {
    margin-top: 5px;;
}
</style>