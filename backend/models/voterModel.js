import mongoose from "mongoose";

const voterSchema = mongoose.Schema(
    {
        firstName: {
            type : String,
            required: true
        },
        lastName: {
            type : String,
            required: true
        },
        dOB: {
            type : String,
            required: true
        },
        nIC: {
            type : String,
            required: true
        },
        contactNumber: {
            type : String,
            required: true
        },
        stakeholderRole: {
            type : String,
            required: true
        },


    },
    {
        timestamps: true,
    }
);

export const Voter = mongoose.model('Cat', voterSchema);

