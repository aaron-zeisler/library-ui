<template>
    <div>
        <div>
            <h1>View the library's catalog of book</h1>
        </div>
        <div id="catalog-table">
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <th>Book ID</th>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        <tr
                        v-for="book in books"
                        :key="book.id"
                        >
                            <td>{{ book.id }}</td>
                            <td>{{ book.isbn }}</td>
                            <td>{{ book.title }}</td>
                            <td>{{ book.author }}</td>
                            <td>{{ book.description }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                books: [
                    {id: "448E55A3-E88E-4597-B3CB-11A844EFDA5D", isbn: "9781451673265", title: "Fahrenheit 451", author: "Ray Bradbury", description: "It was a pleasure to burn"},
                ]
            }
        }
    }
</script>