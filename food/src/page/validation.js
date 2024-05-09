 
export const validateSignupForm = (formData) => {
    const errors = {};

    // Username validation
    if (!formData.username.trim()) {
        errors.username = "Username is required";
    } else if (!/^[a-zA-Z]{1,25}$/.test(formData.username.trim())) {
        errors.username = "Username must contain only letters (A-Z, a-z) and should not exceed 25 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
        errors.email = "Invalid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
        errors.phone = "Phone number must contain exactly 10 digits";
    }

    // Password validation
    if (!formData.password.trim()) {
        errors.password = "Password is required";
    } else if (formData.password.trim().length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }

    return errors;
};
