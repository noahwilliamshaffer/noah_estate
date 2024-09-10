// Filename - App.js

import React, { useState, useCallback } from "react";
import { Calendar } from "@natscale/react-calendar";

export default function CalendarGfg() {
    const [value, setValue] = useState();
    const [isPopupVisible, setPopupVisible] = useState(false); // State for popup visibility
    const [formData, setFormData] = useState({ name: "", description: "" }); // State for form input

    // Get current date and set the minimum date to one day after today
    const today = new Date();
    const minSelectableDate = new Date(today);
    minSelectableDate.setDate(today.getDate() + 1); // Set to one day after today

    const onChange = useCallback(
        (value) => {
            // Prevent date selection if it's before the minimum selectable date
            if (value < minSelectableDate) {
                alert("You cannot select a past date.");
                return;
            }

            setValue(value);
            setPopupVisible(true); // Show popup when a day is clicked
        },
        [setValue, minSelectableDate]
    );

    const handleClose = () => {
        setPopupVisible(false); // Close the popup
    };

    const handleSubmit = async () => {
        const payload = {
            selectedDate: value,
            ...formData, // Include form data (name and description)
        };

        try {
            // Sending data to MongoDB via POST request to your backend
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert("Data submitted successfully!");
                setPopupVisible(false); // Close popup after submit
            } else {
                alert("Error submitting data.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Submission failed.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Disable back button on calendar by checking if the current month is the same as today's month
    const handleNavigationDisabled = ({ activeStartDate }) => {
        const currentDate = new Date();
        return activeStartDate.getMonth() <= currentDate.getMonth() && activeStartDate.getFullYear() === currentDate.getFullYear();
    };

    return (
        <div>
            <h1>Select a day</h1>
            <Calendar 
                value={value} 
                onChange={onChange} 
                // Prevent navigation backward to previous months
                onActiveStartDateChange={({ activeStartDate }) => {
                    const isCurrentMonthOrLater =
                        activeStartDate.getMonth() >= today.getMonth() &&
                        activeStartDate.getFullYear() >= today.getFullYear();
                    if (!isCurrentMonthOrLater) {
                        alert("You cannot navigate to previous months.");
                        return;
                    }
                }}
                showNavigation={true}
            />

            {isPopupVisible && (
                <div style={popupStyle}>
                    <div style={popupContentStyle}>
                        <h2>Selected Date: {value && value.toDateString()}</h2>

                        {/* Form to collect additional information */}
                        <form>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <br />
                            <label>
                                Description:
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </form>

                        {/* Close and Submit Buttons */}
                        <div style={{ marginTop: "20px" }}>
                            <button onClick={handleClose} style={buttonStyle}>
                                Close
                            </button>
                            <button onClick={handleSubmit} style={buttonStyle}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Simple inline styles for the popup
const popupStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const popupContentStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    textAlign: "center",
    width: "300px",
};

// Simple inline styles for buttons
const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};
