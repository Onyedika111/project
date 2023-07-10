export default function Validation(values) {
    const errors = {}
    // const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/

    if (values.user_name === "") {
        errors.name = 'Name is required!'
    }

    if (values.user_email === "") {
        errors.email = "Email is required!"
    } else if (!email_pattern.test(values.user_email)) {
        errors.email = "Please provide a valid email."
    }

    if (values.message === "") {
        errors.message = 'Message is required!'
    }

    return errors

}