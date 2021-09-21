# Everest Engineering Coding Challenge
The code in this repository is submission for 'Kiki's Courier Service' problem. The problem itself had two sub-problems that have been discussed below. 
---
## Execution

### Requirements
NodeJS - Version 16.9.1 or hiher


### Running The Program
Simply clone the repository (or download and unzip) and run the command ```npm install```in order to install all the dependecies. Once the installation is complete, run the command ```npm start``` to run the command-line application.

## Testing
This program uses a node module called 'jest' for testing purposes. The tester need only write/paste the data in '/testing/testData.txt' (dummy data already provided) in the requried format.

---

## Problem Breakdown

### Poblem 1
Problem 1 invovled having to check whether or not the offer-code entered by the user is valid or not, and had to return the delivery cost based on the validity of the discount offer code.

Coming up with a solution for this problem was rather simple - split each package into it's own entry, extract the offer-code entered by the user and look it up in the look-up-table.
However; an important thing to keep in mind was scalability. The operator should be able to add, remove or change offer-codes easily. Keeping this in mind, the offer table was moved into its own '.txt' file and a function was written in order to convert that data into JSON.

### Poblem 2
Problem 2 involved having to make an appropriate delivery schedule based on all the packages that are to be delivered at any moment. The delivery criteria, in order of priority were:
1) Most number of packages in each shipment.
2) If number of packages in multiple shipments is same, the one with the most weight should be delivered first.
3) If the weight of shipments is also same, the one which can be delivered sooner should be given priority.

On the surface, this seemed like an evolution upon quite a famous problem in computer science; The Knapsack Problem, but while solving, it was relized that this was rather different. 
This problem was solved by breaking it down into two subsections; making batches of shipment by combining packages such that the weight of the entire shipment is maximized and scheduling/dispatching the shipments based on the above mentioned criteria. 
