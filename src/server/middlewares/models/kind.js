/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const { model, Schema } = require("mongoose");
require("mongoose-type-url");

const KindsSchema = new Schema(
  {
    kind: {
      type: String,
      required: true,
    },
    owner: { type: Schema.Types.ObjectId, ref: "kind" },
  },
  {
    timestamps: true,
  }
);

KindsSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id;
    delete returnObject._id;
    delete returnObject.__v;
  },
});

const Serie = model("Serie", KindsSchema, "series");

module.exports = Serie;
