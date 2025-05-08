// controllers/clientController.js
import { Project } from '../models/Project.js';

export const getClientProfile = async (req, res) => {
    try {
      const client = await User.findById(req.user.id).select('-password');
      if (!client || client.role !== 'client') {
        return res.status(404).json({ message: 'Client not found' });
      }
      res.json(client);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching client profile' });
    }
  };

export const uploadProject = async (req, res) => {
  try {
    const { title, description, budget, location } = req.body;
    const clientId = req.user.id;  // user.id payload se JWT middleware ke through aaega

    const project = new Project({
      clientId,
      title,
      description,
      budget,
      location,
    });

    await project.save();
    res.status(201).json({ message: 'Project uploaded successfully', project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to upload project' });
  }
};
