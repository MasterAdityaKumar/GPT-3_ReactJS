import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="GPT-3 (short for Generative Pre-trained Transformer 3) is a state-of-the-art language model developed by OpenAI, an artificial intelligence research organization. GPT-3 is designed to generate human-like natural language text and can perform a wide variety of language tasks, such as language translation, summarization, answering questions, and even creative writing.

GPT-3 is a neural network that has been trained on a massive corpus of text data, consisting of billions of words from a diverse range of sources. This pre-training allows the model to understand the structure and patterns of language, making it capable of generating high-quality natural language text. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="A GPT-3 chatbot is a conversational AI system that uses the GPT-3 language model to generate responses to user inputs in natural language. The chatbot can be trained on a wide range of topics and can be customized to specific use cases, such as customer service, personal assistant, or even educational purposes."
      />
      <Feature
        title="Knowledgebase"
        text="GPT-3 can be used to build a knowledgebase or an educational tool by providing natural language responses to user queries. A knowledgebase is a centralized database of information, which can be used to store and manage knowledge on a specific topic. The knowledgebase can be made accessible to users through a chatbot, which can use GPT-3 to generate responses to user queries"
      />
      <Feature
        title="Education"
        text="In the context of education, GPT-3 can be used to build educational tools, such as language learning platforms, math problem solvers, and writing assistants. GPT-3 can be trained on a wide range of educational materials and can generate responses to student queries, providing personalized support and feedback. GPT-3 can also be used to create educational content, such as study guides, quiz questions, and writing prompts."
      />
    </div>
  </div>
);

export default WhatGPT3;
