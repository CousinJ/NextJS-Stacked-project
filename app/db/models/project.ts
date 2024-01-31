// Import mongoose
import mongoose from 'mongoose';

// Define a schema for the User model

const projectSchema = new mongoose.Schema ({
  
  user_info: {
    type: Object,
    required: true,
    
    
  },
//this is the project data in the user for one project. just the name descript and stack
  project_info: {
    type: Object,
    required: true
  },
  
//contents of the project when opened 
  project_content: {
    type: Object,
    required: false
  }
  
});

// Create a User model using the defined schema
const Project =  mongoose.models.Project || mongoose.model('Project', projectSchema);

// Export the User model
export default Project;
