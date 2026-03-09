Stephenen_Lab Development notes (Notes to self)

This directory has been added to allow the safe introduction of questions for new modules without affecting existing ones.

Initially, it will contain a replicated set of the CHE4101B questions, which are currently located in the default index. These can later be migrated to Blackboard outside of term time.This directory has been added to allow the safe introduction of questions for new modules without affecting existing ones.

Initially, it will contain a replicated set of the CHE4101B questions, which are currently located in the default index. These can later be migrated to Blackboard outside of term time.

e.g. new Blackboard link structure would be (<module2> replaced with the actual module number, e.g. CHE4101B etc):
.../mech-checker-light/?task=1 <-- Defaults to orginal CHE4101B index.html and tasks.js 
.../mech-checker-light/modules/CHE4101B/?task=1 <-- New uses its own index.html and tasks.js Replicate of orginal
.../mech-checker-light/modules/module2/?task=2 <-- New uses its own index.html and tasks.js
.../mech-checker-light/modules/module3/?task=1 <-- New uses its own index.html and tasks.js

The new index.html files must have this edit to reach esisting assets folder:

This;

<img src="./assets/logo.png" alt="Dr Stephenson's Mech-Checker" class="logo">

to;

<img src="../../assets/logo.png" alt="Dr Stephenson's Mech-Checker" class="logo">

