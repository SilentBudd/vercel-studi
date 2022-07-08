export default {
    name: "user",
    title: "User",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "username",
            title: "Username",
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "password",
            title: "Password",
            type: "string"
        },
        {
            name: "photo",
            title: "Photo",
            type: "image"
        },
        {
            name: "following",
            title: "Following",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type:"user" }]
                }
            ],
            validation: (Rule) => Rule.unique(),
        },
        {
            name: "created_at",
            title: "Created At",
            type: "datetime",
        },
    ],
};