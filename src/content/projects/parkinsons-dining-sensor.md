---
title: "Parkinson's Research — Dining Motion Sensors"
phase: "CONCEPT → PROTOTYPE"
context: "Research Project"
paragraphs:
  - "Parkinson's disease and other neurodegenerative disorders cause subtle changes in motor function that are nearly impossible to monitor outside clinical settings. Existing solutions — wearables and camera systems — are intrusive and alter natural behavior. Our team built a compact wireless sensing platform that turns everyday dining objects into motion tracking devices, letting researchers capture real movement data during routine activity."
  - "The device is a detachable sensor module housing a 6-DOF IMU, rechargeable battery, and Bluetooth Low Energy radio. It clips onto mugs, forks, spoons, and knives — objects users already interact with naturally — so data collection is unobtrusive by design."
  - "I led the mechanical design, prototyping, and system integration. Early development explored straps, clamps, magnets, and adhesives as mounting strategies. Through iteration, we converged on a modular architecture: a self-contained sensor package paired with interchangeable mounts. The final mechanism uses a magnetically assisted twist-lock — secure enough to survive active use, simple enough for users with limited dexterity."
  - "The central engineering tension was compactness vs. signal fidelity. The housing needed to rigidly couple the electronics to the host object so vibrations and motion transmitted accurately to the IMU — any flex would corrupt the tremor signal. The final prototype is 28 mm in diameter, weighs 13 g, and mounts reliably to 6+ dining objects."
  - "We also built the full data pipeline: Arduino firmware for sensor acquisition, BLE for wireless transmission, and Python-based analysis tools. Frequency-domain processing cleanly separated voluntary movement from tremor-like motion, validating the system as a low-cost research platform for real-world motor monitoring."
tags: [Fusion360, User Testing, Ergonomics, XIAO MG24Sense, Bluetooth Low Energy, IMU, FDM 3D Printing, Python, Signal Processing]
featured: true
order: 2
cover: "/projects/parkinsons-dining-sensor/1.webp"
coverLayout: landscape
images:
  - "/projects/parkinsons-dining-sensor/1.webp"
  - "/projects/parkinsons-dining-sensor/2.webp"
  - "/projects/parkinsons-dining-sensor/3.webp"
  - "/projects/parkinsons-dining-sensor/4.webp"
  - "/projects/parkinsons-dining-sensor/5.webp"
---
