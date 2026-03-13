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
  10: { title: "CHE-5150B - Q9 (Curve Ball)", formula: "C3H7NO3", requireStereo: true, prompt: "This is a Curve Ball of a question - Draw the amino acid L-serine.", answersSmiles: ["N[C@@H](CO)C(=O)O"] },
  11: { title: "CHE-5150B - Q10", formula: "C16H19N3O4S", requireStereo: false, prompt: "Draw the Zwitterion ion form.", answersSmiles: ["CC3(C)S[C@@H]2[C@H](NC(=O)[C@H]([NH3+])c1ccccc1)C(=O)N2[C@H]3C(=O)[O-]"] },
  12: { title: "CHE-5150B - Q11", formula: "C19H21NO4", requireStereo: false, prompt: "Draw the structure with your acetyl group(s) added.", answersSmiles: ["CC(=O)O[C@H]1C=CC2C3Cc4ccc(O)c5O[C@@H]1[C@]2(CCN3C)c45"] },
  13: { title: "CHE-5150B - Q12", formula: "C19H21NO3", requireStereo: false, prompt: "Draw the structure of the missing product.", answersSmiles: ["C=CCN4CC[C@]23c1c5ccc(O)c1O[C@H]2[C@@H](O)C=CC3C4C5"] },
  14: { title: "CHE-5150B - Q13", formula: "C13H20N2O2", requireStereo: false, prompt: "Draw the missing resonance structure.", answersSmiles: ["CCN(CC)CCOC([O-])=c1ccc(=[NH2+])cc1"] },
};
