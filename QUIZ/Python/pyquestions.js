// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What is the correct syntax to output ''Hello World'' in Python?",
    answer: "print(''Hello World'')",
    options: [
      "p(''Hello World'')",
      "echo(''Hello World'');",
      "echo ''Hello World''",
      "print(''Hello World'')"
    ]
  },
    {
    numb: 2,
    question: "How do you insert COMMENTS in Python code?",
    answer: "#This is a comment",
    options: [
      "//This is a comment",
      "/*This is a comment*/",
      "#This is a comment",
      "All of the above"
    ]
  },
    {
    numb: 3,
    question: "Which one is NOT a legal variable name?",
    answer: "my-var",
    options: [
      "_myvar",
      "my-var",
      "Myvar",
      "my_var",
    ]
  },
    {
    numb: 4,
    question: "Which method can be used to replace parts of a string?",
    answer: "replace()",
    options: [
      "switch()",
      "repl()",
      "replaceString()",
      "replace()"
    ]
  },
    {
    numb: 5,
    question: "Which statement is used to stop a loop?",
    answer: "break",
    options: [
      "exit",
      "return",
      "break",
      "stop"
    ]
  },
   {
    numb: 6,
    question: "How do you start writing a while loop in Python?",
    answer: "while x > y:",
    options: [
      "x > y while { ",
      "while (x > y)",
      "while x > y {",
      "while x > y:"
    ]
  },
    {
    numb: 7,
    question: "How do you start writing a for loop in Python?",
    answer: "for x in y:",
    options: [
      "for x in y:",
      "for x > y:",
      "for each x in y:",
      "All of the above"
    ]
  },
    {
    numb: 8,
    question: "What is the correct file extension for Python files?",
    answer: ".py",
    options: [
      ".py",
      ".pyt",
      ".pyth",
      ".pt"
    ]
  },
    {
    numb: 9,
    question: "What is the correct syntax to output the type of a variable or object in Python?",
    answer: "print(type(x))",
    options: [
      "print(typeof x)",
      "print(type(x))",
      "print(typeof(x))",
      "print(typeOf(x))"
    ]
  },
    {
    numb: 10,
    question: "What is the correct way to create a function in Python?",
    answer: "def myFunction():",
    options: [
      "function myfunction():",
      "create myFunction():",
      "def myFunction():",
      "All of the above"
    ]
  },
    {
    numb: 11,
    question: "What is the correct syntax to return the first character in a string?",
    answer: "x = ''Hello''[0]",
    options: [
      "x = ''Hello''.sub(0, 1)",
      "x = sub(''Hello'', 0, 1)",
      "x = ''Hello''[0]",
      "All of the above"
    ]
  },
    {
    numb: 12,
    question: "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
    answer: "strip()",
    options: [
      "strip()",
      "ptrim()",
      "trim()",
      " len()"
    ]
  },
    {
    numb: 13,
    question: "Which method can be used to return a string in upper case letters?",
    answer: "upper()",
    options: [
      "upperCase()",
      "uppercase()",
      "toUpperCase()",
      "upper()"
    ]
  },
    {
    numb: 14,
    question: "Which method can be used to replace parts of a string?",
    answer: "replace()",
    options: [
      "replaceString()",
      "replace()",
      "repl()",
      "switch()"
    ]
  },
    {
    numb: 15,
    question: "Which operator is used to multiply numbers?",
    answer: "*",
    options: [
      "%",
      "x",
      "#",
      "*"
    ]
  },
    {
    numb: 16,
    question: "Which operator can be used to compare two values?",
    answer: "==",
    options: [
      "><",
      "==",
      "<>",
      "="
    ]
  },
    {
    numb: 17,
    question: "Which of these collections defines a LIST?",
    answer: "[''apple'', ''banana'', ''cherry'']",
    options: [
      "[''apple'', ''banana'', ''cherry'']",
      "(''apple'', ''banana'', ''cherry'')",
      "{''apple'', ''banana'', ''cherry''}",
      "[''name'': ''appple'':,''color'': ''cherry'']"
    ]
  },
    {
    numb: 18,
    question: "Which of these collections defines a LIST?",
    answer: "[''apple'', ''banana'', ''cherry'']",
    options: [
      "[''apple'', ''banana'', ''cherry'']",
      "(''apple'', ''banana'', ''cherry'')",
      "{''apple'', ''banana'', ''cherry''}",
      "{''name'': ''appple'':,''color'': ''green''}"
    ]
  },
    {
    numb: 19,
    question: "Which of these collections defines a TUPLE?",
    answer: "(''apple'', ''banana'', ''cherry'')",
    options: [
      "{''name'': ''appple'':,''color'': ''green''}",
      "[''apple'', ''banana'', ''cherry'']",
      "(''apple'', ''banana'', ''cherry'')",
      "{''apple'', ''banana'', ''cherry''}"
    ]
  },
    {
    numb: 20,
    question: "Which of these collections defines a SET?",
    answer: "{''apple'', ''banana'', ''cherry''}",
    options: [
      "{''name'': ''appple'':,''color'': ''green''}",
      "[''apple'', ''banana'', ''cherry'']",
      "(''apple'', ''banana'', ''cherry'')",
      "{''apple'', ''banana'', ''cherry''}"
    ]
  },
    {
    numb: 21,
    question: "Which of these collections defines a DICTIONARY?",
    answer: "{''name'': ''appple'':,''color'': ''green''}",
    options: [
      "{''name'': ''appple'':,''color'': ''green''}",
      "[''apple'', ''banana'', ''cherry'']",
      "(''apple'', ''banana'', ''cherry'')",
      "{''apple'', ''banana'', ''cherry''}"
    ]
  },
    {
    numb: 22,
    question: "Which collection is ordered, changeable, and allows duplicate members?",
    answer: "LIST",
    options: [
      "LIST",
      "TUPLE",
      "SET",
      "DICTIONARY"
    ]
  },
    {
    numb: 23,
    question: "Which collection is ordered, changeable, and allows duplicate members?",
    answer: "SET",
    options: [
      "LIST",
      "TUPLE",
      "SET",
      "DICTIONARY"
    ]
  },
    {
    numb: 24,
    question: "How do you start writing an if statement in Python?",
    answer: "if x > y:",
    options: [
      "if x > y:",
      "if x > y then:",
      "if (x > y)",
      "All of the above"
    ]
  },
    {
    numb: 25,
    question: "How do you create a variable with the numeric value 5?",
    answer: "Both the other answers are correct",
    options: [
      "x = 5",
      "x = int(5)",
      "Both the other answers are correct",
      "All of the above"
    ]
  },
];