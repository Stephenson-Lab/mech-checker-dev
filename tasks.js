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
  2: { title: "CHE-4101B - Q1", formula: "C4H8O2",  requireStereo: false, prompt: "Deduce the structure from the simulated spectra provided on Blackboard", answersSmiles: ["CCOC(C)=O"] },
  3: { title: "CHE-4101B - Q2", formula: "C4H8O2",   requireStereo: false,  prompt: "Deduce the structure from the simulated spectra provided on Blackboard", answersSmiles: ["CCC(=O)OC"] },
  4: { title: "CHE-4101B - Q3", formula: "C11H12O3",   requireStereo: false,  prompt: "Deduce the structure from the simulated spectra provided on Blackboard", answersSmiles: ["CCOC(=O)c1ccc(C(C)=O)cc1"] },
  5: { title: "CHE-4101B - Q4", formula: "C9H8O3",   requireStereo: false,  prompt: "Deduce the structure from the simulated spectra provided on Blackboard", answersSmiles: ["COC(=O)c1ccc(C=O)cc1"] },
  6: { title: "CHE-4101B - Q5", formula: "C15H24O3",   requireStereo: false,  prompt: "Deduce the structure from the simulated spectra provided on Blackboard", answersSmiles: ["CC(C)Oc1cc(OC(C)C)cc(OC(C)C)c1"] },
  7: { title: "CHE-4101B - Q6", formula: "C10H12O3",   requireStereo: false,  prompt: "Deduce the structure from the simulate proton NMR spectrum and the IR spectrum provided on Blackboard", answersSmiles: ["COc1c(C)cc(C(=O)O)cc1C"] },
  8: { title: "CHE-4101B - Q7", formula: "C8H10O2",   requireStereo: false,  prompt: "Deduce the structure from the simulate proton NMR spectrum and the IR spectrum provided on Blackboard", answersSmiles: ["COc1ccc(CO)cc1"] },
  9: { title: "CHE-4101B - Q8", formula: "C4H8O2",   requireStereo: false,  prompt: "Deduce the structure from the simulate proton NMR spectrum and the IR spectrum provided on Blackboard", answersSmiles: ["C1COCCO1"] },
  10: { title: "CHE-4101B - Q9", formula: "C5H10O",   requireStereo: false,  prompt: "Deduce the structure from the simulate proton NMR spectrum and the IR spectrum provided on Blackboard", answersSmiles: ["CCC(=O)CC"] },
   // Example of multiple acceptable answers (e.g., racemate accepted):
  11: { title: "CHE-4101B - Q10", formula: "C2H3O",    requireStereo: false,  prompt: "Deduce the structure of the fragment ion likely to be producing the base peak in the EI-Mass spectrum provided on Blackboard.", answersSmiles: [
      "CC#[O+]",  // replace with real
      "C[C+]=O"
    ]},
  12: { title: "CHE-4101B - Q11", formula: "C7H7",    requireStereo: false,  prompt: "Deduce the structure of the fragment ion likely to be producing the peak at 91 m/z in the EI-Mass spectrum provided on Blackboard.", answersSmiles: [
      "c1ccc[cH+]cc1",  // replace with real
      "[CH2+]c1ccccc1"
    ]},
  13: { title: "CHE-4101B - Q12", formula: "C3H5",   requireStereo: false,  prompt: "Deduce the structure of the fragment ion likely to be producing the peak at 41 m/z in the EI-Mass spectrum provided on Blackboard.", answersSmiles: ["C=C[CH2+]"] },
  14: { title: "CHE-4101B - Q13", formula: "C5H11",   requireStereo: false,  prompt: "Deduce the structure of the fragment ion likely to be producing the peak at 71 m/z in the EI-Mass spectrum provided on Blackboard.", answersSmiles: ["CCCC[CH2+]"] },
};
