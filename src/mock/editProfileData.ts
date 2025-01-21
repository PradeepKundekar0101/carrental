  // Generate arrays for date selects
  export const years = Array.from({ length: 71 }, (_, i) => 2025 - i);
  export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  export const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Countries for phone selection
  export const countries = [
    { code: "us", name: "United States", dialCode: "+13" },
    { code: "uk", name: "United Kingdom", dialCode: "+44" },
    { code: "ca", name: "Canada", dialCode: "+1" },
    { code: "au", name: "Australia", dialCode: "+61" },
    // Add more countries as needed
  ];

  export const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas",
    // Add more states as needed
  ]

  export const languages = [
    "English", "Spanish", "French", "German",
    // Add more languages as needed
  ]