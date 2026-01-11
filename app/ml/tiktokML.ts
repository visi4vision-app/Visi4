import * as tf from "@tensorflow/tfjs";

export function predictVirality(features: number[]) {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 8, inputShape: [features.length], activation: "relu" }));
  model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));
  model.compile({ optimizer: "adam", loss: "binaryCrossentropy" });

  const input = tf.tensor([features]);
  const output = model.predict(input) as tf.Tensor;
  return output.dataSync()[0];
}
