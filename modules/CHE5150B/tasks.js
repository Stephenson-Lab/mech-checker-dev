// Edit these 10 entries.
// answersSmiles can contain multiple acceptable products.
window.TASKS = {
  1: {
  title: "How to Use Mech-Checker - Practice: Draw benzoic acid",
  formula: "C7H6O2",
  requireStereo: false,
  prompt: `How to Use Mech-Checker

Mech-Checker is a formative self-assessment tool designed to support practice questions in which the answer is a chemical structure.

The tool was originally developed by Dr Stephenson to check students’ answers to mechanism questions, hence the name Mech-Checker. It may also be used for other structure-based questions (e.g. spectroscopy or reaction outcome problems).

Read the question prompt carefully in the content block above. Based on the information provided, draw your proposed structure in the editor.

When you are satisfied with your answer:

Click “Check” to receive automated feedback.

Click “Clear” to remove the feedback message (this does not delete your structure).

The tool evaluates your response against the expected answer for the task, checking molecular formula, bonding connectivity, and stereochemistry (where required).

You may attempt the activity multiple times. This tool is intended for formative practice only.`,
  answersSmiles: ["O=C(O)c1ccccc1"]
},
  2: { title: "CHE-5150B - Q1", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "What is the structure of the missing product or intermediate on Blackboard?", answersSmiles: ["FCOC([C@@H](NC(CC1=CC=CC=C1)=O)[C@@H]2N[C@@H](C([O-])=O)C(C)(C)S2)=O"] },
  3: { title: "CHE-5150B - Q2", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "Draw the structure of the pencillin with the added fluorine atom?", answersSmiles: ["CC1(C)[C@H](C(O)=O)N2C([C@@H](NC([C@@H](F)C3=CC=CC=C3)=O)[C@H]2S1)=O"] },
  4: { title: "CHE-5150B - Q3", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "What is the structure of the missing product or intermediate on Blackboard?", answersSmiles: ["OC(C(NC(C1=CC=C(N([H])CC2N(CC3C(SCF)N([C@H]4C[C@H](O)[C@@H](COP([O-])([O-])=O)O4)C(NC3=O)=O)C5=C(NC2)NC(N)=NC5=O)C=C1)=O)CCC(O)=O)=O"] },
  5: { title: "CHE-5150B - Q4", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "Draw your fluorinated analogue.", answersSmiles: ["O=C1C(F)=CNC(N1)=O"] },
  6: { title: "CHE-5150B - Q5", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "Draw the structure of the missing product", answersSmiles: ["O=CC(C=CC=C1)=C1C(O)=O"] },
  7: { title: "CHE-5150B - Q6", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "Draw the structure of the missing product", answersSmiles: ["O=C(O)[C@@H](NC(C)=O)[C@@H]1N=C(C(O)=O)C(CS1)=C"] },
  8: { title: "CHE-5150B - Q7", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "Draw the structure of the missing intermediate - use F to represent R!", answersSmiles: ["O=C(O)[C@@H](/C(O1)=C/CO)N[C@H]1CC(OCF)=O"] },
  9: { title: "CHE-5150B - Q8", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "Draw the full structure including your placement of the additional methyl group", answersSmiles: ["Cc3ccc(NC(=O)c2ccc(CN1CCN(C)CC1)cc2)cc3Nc5nccc(c4cccnc4)n5"] },
  10: { title: "CHE-5150B - Q10", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "Edit", answersSmiles: [""] },
  11: { title: "CHE-5150B - Q11", formula: "This field is defunct - now generated from smiles",  requireStereo: false, prompt: "Edit", answersSmiles: [""] },
  12: { title: "Taskbuilder6 check", formula: "C45H47N7O", requireStereo: false, prompt: "single multp anser check", answersSmiles: ["CN8CCN(Cc7ccc(C(=O)Nc6ccc(C1=C[C+]3(=CC=C1)C=C2CC[CH+]CCCC2=CC3)c(Nc5nccc(c4cccnc4)n5)c6)cc7)CC8", "CN8CCN(Cc7ccc(C(=O)Nc6ccc(C1=C[C+]3(=CC=C1)C=C2CCCCCCC2=C[CH+]3)c(Nc5nccc(c4cccnc4)n5)c6)cc7)CC8"] },
};
