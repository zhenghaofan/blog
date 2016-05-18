/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Article', ArticleSchema);
