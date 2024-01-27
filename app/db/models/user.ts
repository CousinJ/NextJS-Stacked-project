// Import mongoose
import mongoose from 'mongoose';

// Define a schema for the User model

const userSchema = new mongoose.Schema ({
  
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  
  user_data: {
    type: Object,
    required: false
  },

  project_data: {
    type: Array,
    default:[]
  }
  
});

// Create a User model using the defined schema
const User =  mongoose.models.User || mongoose.model('User', userSchema);

// Export the User model
export default User;
