import { Request, Response } from "express";
import { DocumentModel } from "./document.model";

// Create document
export const createDocument = async (req: Request, res: Response) => {
  try {
    const { type, title, content, riskFlags } = req.body;
    const doc = await DocumentModel.create({
      userId: req.user?.id,
      type,
      title,
      content,
      riskFlags: riskFlags || [],
    });
    res.status(201).json(doc);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get documents (search + filter)
export const getDocuments = async (req: Request, res: Response) => {
  try {
    const { search, type } = req.query;
    const query: any = { userId: req.user?.id };

    if (search) query.title = { $regex: search as string, $options: "i" };
    if (type) query.type = type;

    const docs = await DocumentModel.find(query).sort({ createdAt: -1 });
    res.json(docs);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get single document
export const getDocumentById = async (req: Request, res: Response) => {
  try {
    const doc = await DocumentModel.findOne({
      _id: req.params.id,
      userId: req.user?.id,
    });
    if (!doc) return res.status(404).json({ message: "Document not found" });
    res.json(doc);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Delete document
export const deleteDocument = async (req: Request, res: Response) => {
  try {
    const doc = await DocumentModel.findOneAndDelete({
      _id: req.params.id,
      userId: req.user?.id,
    });
    if (!doc) return res.status(404).json({ message: "Document not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
