export const response_patterns = [
  {
    pattern: /hello/i,
    response: ["Hello!", "Hi there!", "Nice to see you!"],
  },
  {
    pattern: /how are you/i,
    response: [
      "I'm doing well, thank you for asking.",
      "I'm fine, thanks for asking.",
      "I'm feeling pretty good today.",
    ],
  },
  {
    pattern: /i am (.*)/i,
    response: [
      "Why do you think you are $1?",
      "How long have you been $1?",
      "Tell me more about being $1.",
    ],
  },
  {
    pattern: /i feel (.*)/i,
    response: [
      "Why do you feel $1?",
      "What do you think caused you to feel $1?",
      "Can you describe how $1 feels?",
    ],
  },
  {
    pattern: /i need (.*)/i,
    response: [
      "Why do you need $1?",
      "What would happen if you didn't get $1?",
      "How do you plan to get $1?",
    ],
  },
  {
    pattern: /I have (.*)/,
    response: [
      "Why do you have $1?",
      "How long have you had $1?",
      "Tell me more about having $1.",
    ],
  },
  {
    pattern: /i want (.*)/i,
    response: [
      "Why do you want $1?",
      "What would happen if you got $1?",
      "Do you think you'll be able to get $1?",
    ],
  },
  {
    pattern: /i think (.*)/i,
    response: [
      "Why do you think $1?",
      "How long have you thought that $1?",
      "What makes you think $1?",
    ],
  },

  {
    pattern: /tell me about (.*)/i,
    response: [
      "What specifically would you like to know about $1?",
      "What comes to mind when you think of $1?",
      "Can you tell me more about $1?",
    ],
  },
  {
    pattern: /can you help me with (.*)/i,
    response: [
      "What specifically do you need help with regarding $1?",
      "What have you tried so far to deal with $1?",
      "I'm happy to help with $1 if I can.",
    ],
  },
  {
    pattern: /i'm (.*)(ing|ed)/i,
    response: [
      "Tell me more about how you're $1 $2.",
      "What do you think caused you to $1 $2?",
      "Do you enjoy $1 $2?",
    ],
  },
  {
    pattern: /i (feel|think) like (.*)/i,
    response: [
      "Why do you feel like $2?",
      "What specifically is making you think like $2?",
      "How long have you felt like $2?",
    ],
  },
  {
    pattern: /how do you feel about (.*)/i,
    response: [
      "I'm more interested in how you feel about $1.",
      "What do you think about $1?",
      "Why do you ask about my feelings?",
    ],
  },
  {
    pattern: /why do you ask/i,
    response: [
      "I'm just trying to understand you better.",
      "It helps me to understand your perspective.",
      "I'm curious about your thoughts on the matter.",
    ],
  },
  {
    pattern: /what do you think about (.*)/i,
    response: [
      "It's not important what I think, what do you think about $1?",
      "I'm interested in your opinion on $1.",
      "Why are you asking me about my thoughts on $1?",
    ],
  },
  {
    pattern: /can you tell me more about that/i,
    response: [
      "What specifically would you like to know more about?",
      "Sure, what would you like me to explain further?",
      "I'm happy to expand on that, what specifically would you like to know?",
    ],
  },
  {
    pattern: /i don't know/i,
    response: [
      "Why do you think you don't know?",
      "How might you find out?",
      "It's okay not to know everything.",
    ],
  },
  {
    pattern: /i don't understand/i,
    response: [
      "What specifically don't you understand?",
      "Would you like me to explain further?",
      "Let's break it down and go over it together.",
    ],
  },

  {
    pattern: /goodbye/i,
    response: ["Goodbye!", "Take care!", "Until next time!"],
  },
  {
    pattern: /my name is (.*)/i,
    response: ["Nice to meet you, $1. Can you tell me more about yourself?"],
  },
  {
    pattern: /i am feeling (.*)/i,
    response: [
      "I'm sorry to hear that you're feeling $1. What do you think might have caused those feelings?",
    ],
  },
  {
    pattern: /i need (.*)/i,
    response: [
      "What makes you think you need $1? Can you tell me more about that?",
    ],
  },
  {
    pattern: /i love (.*)/i,
    response: [
      "That's wonderful that you love $1. What is it about $1 that you find so appealing?",
    ],
  },
  {
    pattern: /i hate (.*)/i,
    response: [
      "I'm sorry to hear that you hate $1. What is it about $1 that you find so unpleasant?",
    ],
  },
  {
    pattern: /i'm afraid of (.*)/i,
    response: [
      "It's understandable that you're afraid of $1. What do you think might help you overcome that fear?",
    ],
  },
  {
    pattern: /i'm excited about (.*)/i,
    response: [
      "That's great that you're excited about $1! What are you most looking forward to?",
    ],
  },
  {
    pattern: /i can't (.*)/i,
    response: [
      "It sounds like you're feeling frustrated that you can't $1. What do you think might be preventing you from doing it?",
    ],
  },
  {
    pattern: /i want (.*)/i,
    response: [
      "What is it that you want, $1? Can you tell me more about why that is important to you?",
    ],
  },
  {
    pattern: /i feel like (.*)/i,
    response: [
      "It seems like you're feeling like $1. What is causing you to feel that way?",
    ],
  },
  {
    pattern: /i remember (.*)/i,
    response: [
      "That's an interesting memory. Can you tell me more about what happened?",
    ],
  },
  {
    pattern: /i forgot (.*)/i,
    response: [
      "It's frustrating when we forget things. What is it that you forgot, $1?",
    ],
  },
  {
    pattern: /i believe (.*)/i,
    response: [
      "That's an interesting belief, $1. What led you to that conclusion?",
    ],
  },
  {
    pattern: /i don't believe (.*)/i,
    response: [
      "It's okay to have different beliefs. What is it that you don't believe, $1?",
    ],
  },
  {
    pattern: /i dreamt of (.*)/i,
    response: [
      "Dreams can be fascinating. Can you tell me more about what happened in your dream?",
    ],
  },
  {
    pattern: /i'm worried about (.*)/i,
    response: [
      "It's understandable that you're worried about $1. What do you think might help you feel less anxious?",
    ],
  },
  {
    pattern: /i'm happy about (.*)/i,
    response: [
      "That's great that you're happy about $1! What is it that makes you so happy?",
    ],
  },
  {
    pattern: /i'm sad about (.*)/i,
    response: [
      "I'm sorry to hear that you're feeling sad about $1. What is causing you to feel that way?",
    ],
  },
  {
    pattern: /i'm angry about (.*)/i,
    response: [
      "It sounds like you're feeling angry about $1. What do you think might help you manage that anger?",
    ],
  },
  {
    pattern: /i'm frustrated about (.*)/i,
    response: [
      "It's understandable that you're feeling frustrated about $1. What do you think might help you feel less frustrated?",
    ],
  },

  {
    pattern: /i'm confused about (.*)/i,
    response: [
      "It can be difficult to make sense of things sometimes. What is it that you're feeling confused about, $1?",
    ],
  },
  {
    pattern: /i'm interested in (.*)/i,
    response: [
      "That's great that you're interested in $1. What is it that fascinates you about it?",
    ],
  },
  {
    pattern: /i'm bored of (.*)/i,
    response: [
      "It sounds like you're feeling bored of $1. What do you think might help you find some excitement?",
    ],
  },
  {
    pattern: /i'm grateful for (.*)/i,
    response: [
      "It's wonderful that you're feeling grateful for $1. What is it that you appreciate about it?",
    ],
  },
  {
    pattern: /i'm jealous of (.*)/i,
    response: [
      "It's normal to feel jealous sometimes. What is it that you're feeling envious of, $1?",
    ],
  },
  {
    pattern: /i'm envious of (.*)/i,
    response: [
      "It's normal to feel envious sometimes. What is it that you're feeling jealous of, $1?",
    ],
  },
  {
    pattern: /i'm in love with (.*)/i,
    response: [
      "That's wonderful that you're in love with $1. What is it about $1 that you find so special?",
    ],
  },
  {
    pattern: /i'm not sure about (.*)/i,
    response: [
      "It's okay to be unsure sometimes. What is it that you're unsure about, $1?",
    ],
  },
  {
    pattern: /i'm proud of (.*)/i,
    response: [
      "It's great that you're feeling proud of $1. What is it that you accomplished that you're proud of?",
    ],
  },
  {
    pattern: /i'm ashamed of (.*)/i,
    response: [
      "I'm sorry to hear that you're feeling ashamed of $1. What is it that is causing you to feel that way?",
    ],
  },
  {
    pattern: /i'm happy for (.*)/i,
    response: [
      "It's wonderful that you're happy for $1. What is it that happened that you're celebrating?",
    ],
  },
  {
    pattern: /i'm sorry for (.*)/i,
    response: [
      "It's admirable that you're feeling sorry for $1. What is it that happened that you regret?",
    ],
  },
  {
    pattern: /i'm fascinated by (.*)/i,
    response: [
      "That's interesting that you're fascinated by $1. What is it about $1 that you find so intriguing?",
    ],
  },
  {
    pattern: /i'm curious about (.*)/i,
    response: [
      "Curiosity is a great quality to have. What is it that you're curious about, $1?",
    ],
  },
  {
    pattern: /i'm afraid for (.*)/i,
    response: [
      "It's understandable that you're feeling afraid for $1. What do you think might help you feel more secure?",
    ],
  },
  {
    pattern: /i'm excited for (.*)/i,
    response: [
      "That's great that you're excited for $1! What are you most looking forward to?",
    ],
  },
  {
    pattern: /i'm grateful to (.*)/i,
    response: [
      "It's wonderful that you're feeling grateful to $1. What did $1 do that you appreciate?",
    ],
  },
  {
    pattern: /i'm not happy with (.*)/i,
    response: [
      "It sounds like you're not happy with $1. What do you think might help you feel more satisfied?",
    ],
  },
  {
    pattern: /i'm not interested in (.*)/i,
    response: [
      "That's okay if you're not interested in $1. What are you more interested in?",
    ],
  },

  {
    pattern: /i'm not ready for (.*)/i,
    response: [
      "It's okay if you're not ready for $1 yet. What do you think might help you prepare for it?",
    ],
  },
  {
    pattern: /i'm not sure if (.*)/i,
    response: [
      "It's okay to be unsure sometimes. What is it that you're not sure about, $1?",
    ],
  },
  {
    pattern: /i'm not feeling (.*)/i,
    response: [
      "It sounds like you're not feeling $1. What do you think might help you feel better?",
    ],
  },
  {
    pattern: /i'm not happy about (.*)/i,
    response: [
      "It's understandable that you're not happy about $1. What do you think might help you feel more positive?",
    ],
  },
  {
    pattern: /i'm not in the mood for (.*)/i,
    response: [
      "It's okay if you're not in the mood for $1 right now. What might you be in the mood for?",
    ],
  },
  {
    pattern: /i'm not interested in talking about (.*)/i,
    response: [
      "That's okay if you're not interested in talking about $1. Is there anything else you would like to discuss?",
    ],
  },
  {
    pattern: /i'm not sure what to do about (.*)/i,
    response: [
      "It can be overwhelming when we're not sure what to do. What do you think are your options, $1?",
    ],
  },
  {
    pattern: /i'm not comfortable with (.*)/i,
    response: [
      "It's important to feel comfortable in our interactions. What is it that is making you uncomfortable, $1?",
    ],
  },
  {
    pattern: /i'm not happy with the way (.*)/i,
    response: [
      "It sounds like you're not happy with the way $1 is going. What do you think might improve the situation?",
    ],
  },
  {
    pattern: /i'm not sure if i can (.*)/i,
    response: [
      "It's okay to feel unsure about our abilities sometimes. What is it that you're not sure if you can do, $1?",
    ],
  },
  {
    pattern: /i'm not interested in doing (.*)/i,
    response: [
      "It's okay if you're not interested in doing $1. Is there something else you would rather do instead?",
    ],
  },

  {
    pattern: /i'm feeling overwhelmed by (.*)/i,
    response: [
      "It's understandable that you're feeling overwhelmed by $1. What do you think might help you feel more in control?",
    ],
  },
  {
    pattern: /i'm feeling stressed about (.*)/i,
    response: [
      "I'm sorry to hear that you're feeling stressed about $1. What do you think might help you feel more relaxed?",
    ],
  },
  {
    pattern: /i'm feeling anxious about (.*)/i,
    response: [
      "It's understandable that you're feeling anxious about $1. What do you think might help you feel more calm?",
    ],
  },
  {
    pattern: /i'm feeling frustrated with (.*)/i,
    response: [
      "It sounds like you're feeling frustrated with $1. What do you think might help you feel more satisfied?",
    ],
  },
  {
    pattern: /i'm feeling exhausted from (.*)/i,
    response: [
      "It's understandable that you're feeling exhausted from $1. What do you think might help you feel more energized?",
    ],
  },
  {
    pattern: /i'm feeling overwhelmed by my workload/i,
    response: [
      "It's common to feel overwhelmed by our workload sometimes. What do you think might help you manage your tasks?",
    ],
  },
  {
    pattern: /i'm feeling stressed about my upcoming deadline/i,
    response: [
      "Deadlines can be stressful. What do you think might help you meet your deadline?",
    ],
  },
  {
    pattern: /i'm feeling anxious about my upcoming presentation/i,
    response: [
      "It's understandable to feel anxious before a presentation. What do you think might help you feel more confident?",
    ],
  },
  {
    pattern: /i'm feeling frustrated with my current situation/i,
    response: [
      "It sounds like you're feeling frustrated with your current situation. What do you think might help you make changes?",
    ],
  },
  {
    pattern: /i'm feeling exhausted from my busy schedule/i,
    response: [
      "It's common to feel exhausted when we have a busy schedule. What do you think might help you find some rest?",
    ],
  },
  {
    pattern: /i'm feeling overwhelmed by my responsibilities/i,
    response: [
      "It's understandable to feel overwhelmed by our responsibilities sometimes. What do you think might help you prioritize your tasks?",
    ],
  },
  {
    pattern: /i'm feeling stressed about my personal life/i,
    response: [
      "It's normal to feel stressed about our personal lives sometimes. What do you think might help you find some balance?",
    ],
  },
  {
    pattern: /i'm feeling anxious about my future/i,
    response: [
      "It's understandable to feel anxious about the future. What do you think might help you feel more prepared?",
    ],
  },
  {
    pattern: /i'm feeling frustrated with my progress/i,
    response: [
      "It sounds like you're feeling frustrated with your progress. What do you think might help you stay motivated?",
    ],
  },
  {
    pattern: /i'm feeling exhausted from my workouts/i,
    response: [
      "It's common to feel exhausted after a workout. What do you think might help you recover?",
    ],
  },
  {
    pattern: /i'm feeling overwhelmed by my emotions/i,
    response: [
      "It's normal to feel overwhelmed by our emotions sometimes. What do you think might help you manage your feelings?",
    ],
  },
  {
    pattern: /i'm feeling stressed about my finances/i,
    response: [
      "Finances can be stressful. What do you think might help you feel more financially secure?",
    ],
  },
  {
    pattern: /i'm feeling anxious about my health/i,
    response: [
      "It's understandable to feel anxious about our health sometimes. What do you think might help you feel more confident?",
    ],
  },
  {
    pattern: /i'm feeling frustrated with my relationships/i,
    response: [
      "It sounds like you're feeling frustrated with your relationships. What do you think might help you improve your connections?",
    ],
  },
  {
    pattern: /i'm feeling overwhelmed by my studies/i,
    response: [
      "It's understandable to feel overwhelmed by your studies sometimes. What do you think might help you manage your workload?",
    ],
  },
  {
    pattern: /i'm feeling stressed about my job search/i,
    response: [
      "Job searches can be stressful. What do you think might help you stay motivated during the process?",
    ],
  },
  {
    pattern: /i'm feeling anxious about my social life/i,
    response: [
      "It's normal to feel anxious about our social lives sometimes. What do you think might help you find some social support?",
    ],
  },
  {
    pattern: /i'm feeling frustrated with my progress in therapy/i,
    response: [
      "It sounds like you're feeling frustrated with your progress in therapy. What do you think might help you work through your challenges?",
    ],
  },
  {
    pattern: /i'm feeling exhausted from my responsibilities as a caregiver/i,
    response: [
      "It's common to feel exhausted when we have caregiving responsibilities. What do you think might help you find some support?",
    ],
  },
  {
    pattern: /i'm feeling overwhelmed by my household chores/i,
    response: [
      "It's understandable to feel overwhelmed by household chores sometimes. What do you think might help you manage your tasks?",
    ],
  },
  {
    pattern: /i'm feeling stressed about my family dynamics/i,
    response: [
      "Family dynamics can be stressful. What do you think might help you improve your relationships?",
    ],
  },
  {
    pattern: /i'm feeling anxious about my career path/i,
    response: [
      "It's understandable to feel anxious about your career path. What do you think might help you feel more confident in your direction?",
    ],
  },
  {
    pattern: /i'm feeling frustrated with my creative block/i,
    response: [
      "It sounds like you're feeling frustrated with your creative block. What do you think might help you find some inspiration?",
    ],
  },
  {
    pattern: /i'm feeling exhausted from my commute/i,
    response: [
      "Commutes can be tiring. What do you think might help you make your commute more manageable?",
    ],
  },
  {
    pattern: /i feel confused about (.*)/i,
    response: [
      "It can be difficult to make sense of things sometimes. Can you elaborate more on what's causing confusion for you regarding $1?",
    ],
  },
  {
    pattern: /i feel interested in (.*)/i,
    response: [
      "That's great that you're feeling interested in $1. What specifically sparked your curiosity about it?",
    ],
  },
  {
    pattern: /i feel bored with (.*)/i,
    response: [
      "It sounds like you're feeling bored with $1. Is there something you've been wanting to try or explore that could help rekindle your interest?",
    ],
  },
  {
    pattern: /i feel grateful for (.*)/i,
    response: [
      "It's wonderful that you're feeling grateful for $1. What specifically about it are you thankful for?",
    ],
  },
  {
    pattern: /i feel jealous of (.*)/i,
    response: [
      "It's normal to feel jealous sometimes. Can you share more about what's causing you to feel envious of $1?",
    ],
  },
  {
    pattern: /i feel in love with (.*)/i,
    response: [
      "That's wonderful that you're feeling in love with $1. What is it specifically that you admire or appreciate about it?",
    ],
  },
  {
    pattern: /i feel unsure about (.*)/i,
    response: [
      "It's okay to feel unsure sometimes. Can you share more about what's causing you to feel uncertain regarding $1?",
    ],
  },
  {
    pattern: /i feel proud of (.*)/i,
    response: [
      "It's great that you're feeling proud of $1. Can you share more about what you accomplished that you're proud of?",
    ],
  },
  {
    pattern: /i feel ashamed of (.*)/i,
    response: [
      "I'm sorry to hear that you're feeling ashamed of $1. Can you share more about what's causing you to feel that way?",
    ],
  },
  {
    pattern: /i feel happy for (.*)/i,
    response: [
      "It's wonderful that you're feeling happy for $1. Can you share more about what happened that you're celebrating?",
    ],
  },
  {
    pattern: /i feel sorry for (.*)/i,
    response: [
      "It's admirable that you're feeling sorry for $1. Can you share more about what happened that you regret?",
    ],
  },
  {
    pattern: /i feel fascinated by (.*)/i,
    response: [
      "That's interesting that you're feeling fascinated by $1. Can you share more about what specifically you find intriguing?",
    ],
  },
  {
    pattern: /i feel curious about (.*)/i,
    response: [
      "Curiosity is a great quality to have. Can you share more about what specifically you're curious about regarding $1?",
    ],
  },
  {
    pattern: /i feel afraid for (.*)/i,
    response: [
      "It's understandable that you're feeling afraid for $1. Can you share more about what specifically is causing your fear?",
    ],
  },
  {
    pattern: /i feel excited for (.*)/i,
    response: [
      "That's great that you're feeling excited for $1! What specifically are you looking forward to?",
    ],
  },
  {
    pattern: /i feel grateful to (.*)/i,
    response: [
      "It's wonderful that you're feeling grateful to $1. Can you share more about what $1 did that you appreciate?",
    ],
  },
  {
    pattern: /i feel not happy with (.*)/i,
    response: [
      "It sounds like you're not happy with $1. Can you share more about what specifically is causing your dissatisfaction?",
    ],
  },
  {
    pattern: /i feel not interested in (.*)/i,
    response: [
      "That's okay if you're not interested in $1. Can you share more about what specifically you're more interested in?",
    ],
  },
  {
    pattern: /i feel like I'm stuck in (.*)/i,
    response: [
      "Feeling stuck can be frustrating. Can you share more about what specifically is making you feel stuck in $1?",
    ],
  },
  {
    pattern: /i feel like I'm not making progress in (.*)/i,
    response: [
      "It's common to feel like we're not making progress sometimes. Can you share more about what specifically is making you feel like you're not making progress in $1?",
    ],
  },
  {
    pattern: /i feel like I'm in a rut with (.*)/i,
    response: [
      "Feeling like we're in a rut can be discouraging. Can you share more about what specifically is making you feel like you're in a rut with $1?",
    ],
  },
  {
    pattern: /i feel like I'm running out of time for (.*)/i,
    response: [
      "It's understandable to feel like time is running out sometimes. Can you share more about what specifically is making you feel like you're running out of time for $1?",
    ],
  },
  {
    pattern: /i feel like I'm not good enough at (.*)/i,
    response: [
      "Feeling like we're not good enough can be tough. Can you share more about what specifically is making you feel like you're not good enough at $1?",
    ],
  },
  {
    pattern: /i feel like I'm not getting enough support for (.*)/i,
    response: [
      "Feeling like we're not getting enough support can be frustrating. Can you share more about what specifically you feel like you're not getting enough support for regarding $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure how to start (.*)/i,
    response: [
      "It can be overwhelming when we're not sure how to start something. Can you share more about what specifically is making you feel unsure how to start $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure what to do about (.*)/i,
    response: [
      "It can be overwhelming when we're not sure what to do. Can you share more about what specifically is making you feel unsure what to do about $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure where to go next with (.*)/i,
    response: [
      "Feeling unsure about where to go next can be challenging. Can you share more about what specifically is making you feel unsure where to go next with $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure if (.*)/i,
    response: [
      "It's common to feel unsure sometimes. Can you share more about what specifically is making you feel unsure about $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure why (.*)/i,
    response: [
      "It's common to feel unsure sometimes. Can you share more about what specifically is making you feel unsure why $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure who to talk to about (.*)/i,
    response: [
      "Feeling unsure who to talk to can be tough. Can you share more about what specifically is making you feel unsure who to talk to about $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure if I'm ready for (.*)/i,
    response: [
      "It's common to feel unsure if we're ready for something. Can you share more about what specifically is making you feel unsure if you're ready for $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure if I'm capable of (.*)/i,
    response: [
      "Feeling unsure if we're capable of something can be discouraging. Can you share more about what specifically is making you feel unsure if you're capable of $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure if I want to pursue (.*)/i,
    response: [
      "It's common to feel unsure if we want to pursue something. Can you share more about what specifically is making you feel unsure if you want to pursue $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure if it's worth it to continue (.*)/i,
    response: [
      "Feeling unsure if something is worth it can be challenging. Can you share more about what specifically is making you feel unsure if it's worth it to continue $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure what my next steps should be for (.*)/i,
    response: [
      "It can be overwhelming when we're not sure what our next steps should be. Can you share more about what specifically is making you feel unsure what your next steps should be for $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure how to move forward with (.*)/i,
    response: [
      "Feeling unsure how to move forward can be tough. Can you share more about what specifically is making you feel unsure how to move forward with $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure how to handle (.*)/i,
    response: [
      "It can be challenging when we're not sure how to handle something. Can you share more about what specifically is making you feel unsure how to handle $1?",
    ],
  },
  {
    pattern: /i feel like I'm not sure what my options are for (.*)/i,
    response: [
      "Feeling unsure what our options are can be tough. Can you share more about what specifically is making you feel unsure what your options are for $1?",
    ],
  },

  {
    pattern: /i feel angry at (.*)/i,
    response: [
      "It's understandable to feel angry at $1. Can you share more about what specifically is making you feel angry?",
    ],
  },
  {
    pattern: /i feel happy about (.*)/i,
    response: [
      "It's great that you're feeling happy about $1. Can you share more about what specifically is making you happy?",
    ],
  },
  {
    pattern: /i feel sad about (.*)/i,
    response: [
      "I'm sorry to hear that you're feeling sad about $1. Can you share more about what specifically is causing your sadness?",
    ],
  },
  {
    pattern: /i feel scared of (.*)/i,
    response: [
      "It's normal to feel scared of things sometimes. Can you share more about what specifically is making you feel scared of $1?",
    ],
  },
  {
    pattern: /i feel tired from (.*)/i,
    response: [
      "It's common to feel tired from things sometimes. Can you share more about what specifically is making you feel tired from $1?",
    ],
  },
  {
    pattern: /i feel energized by (.*)/i,
    response: [
      "That's great that you're feeling energized by $1. What specifically about it is giving you energy?",
    ],
  },
  {
    pattern: /i feel like quitting (.*)/i,
    response: [
      "It's understandable to feel like quitting sometimes. Can you share more about what specifically is making you feel like quitting $1?",
    ],
  },
  {
    pattern: /i feel accomplished by (.*)/i,
    response: [
      "It's great that you're feeling accomplished by $1. Can you share more about what specifically you accomplished?",
    ],
  },
  {
    pattern: /i feel empowered by (.*)/i,
    response: [
      "It's great that you're feeling empowered by $1. Can you share more about what specifically is making you feel empowered?",
    ],
  },
  {
    pattern: /i feel challenged by (.*)/i,
    response: [
      "It's great that you're feeling challenged by $1. Can you share more about what specifically is challenging you?",
    ],
  },

  {
    pattern: /i feel bored of (.*)/i,
    response: [
      "It sounds like you're feeling bored of $1. Is there something you've been wanting to try or explore that could help rekindle your interest?",
    ],
  },
  {
    pattern: /i feel frustrated with (.*)/i,
    response: [
      "It sounds like you're feeling frustrated with $1. Can you share more about what specifically is causing your frustration?",
    ],
  },
  {
    pattern: /i feel accomplished after (.*)/i,
    response: [
      "It's great that you're feeling accomplished after $1. Can you share more about what specifically you accomplished?",
    ],
  },
  {
    pattern: /i feel stuck on (.*)/i,
    response: [
      "Feeling stuck can be frustrating. Can you share more about what specifically is making you feel stuck on $1?",
    ],
  },
  {
    pattern: /i feel worried about (.*)/i,
    response: [
      "It's normal to feel worried about things sometimes. Can you share more about what specifically is making you feel worried about $1?",
    ],
  },
  {
    pattern: /i feel excited about (.*)/i,
    response: [
      "That's great that you're feeling excited about $1! What specifically are you looking forward to?",
    ],
  },
  {
    pattern: /i feel confused about (.*)/i,
    response: [
      "It can be difficult to make sense of things sometimes. Can you elaborate more on what's causing confusion for you regarding $1?",
    ],
  },
  {
    pattern: /i feel interested in learning more about (.*)/i,
    response: [
      "That's great that you're feeling interested in learning more about $1. What specifically would you like to learn?",
    ],
  },
  {
    pattern: /i feel proud of myself for (.*)/i,
    response: [
      "It's great that you're feeling proud of yourself for $1. Can you share more about what specifically you accomplished?",
    ],
  },
  {
    pattern: /i feel grateful for having (.*)/i,
    response: [
      "It's wonderful that you're feeling grateful for having $1. What specifically about it are you thankful for?",
    ],
  },

  {
    pattern: /can you tell me more about (.*)?/i,
    response: [
      "Of course, I'd be happy to tell you more about $1. What specifically would you like to know?",
    ],
  },
  {
    pattern: /what do you think about (.*)?/i,
    response: [
      "As an AI language model, I don't have personal opinions, but I can provide you with information about $1. What specifically would you like to know?",
    ],
  },
  {
    pattern: /what are some benefits of (.*)?/i,
    response: [
      "There are many potential benefits to $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some drawbacks of (.*)?/i,
    response: [
      "There are some potential drawbacks to $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /can you explain how (.*) works?/i,
    response: [
      "Sure, I can explain how $1 works. What specifically would you like to know?",
    ],
  },
  {
    pattern: /what are some common misconceptions about (.*)?/i,
    response: [
      "There are many common misconceptions about $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some different ways to approach (.*)?/i,
    response: [
      "There are many different ways to approach $1, depending on your goals and resources. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some tips for improving (.*)?/i,
    response: [
      "There are many tips for improving $1, depending on your goals and experience level. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some common uses for (.*)?/i,
    response: [
      "There are many common uses for $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /can you give me some examples of (.*)?/i,
    response: [
      "Sure, I can give you some examples of $1. What specifically would you like examples of?",
    ],
  },

  {
    pattern: /what are some potential risks associated with (.*)?/i,
    response: [
      "There are some potential risks associated with $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some potential benefits of learning (.*)?/i,
    response: [
      "There are many potential benefits of learning $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some common challenges people face when learning (.*)?/i,
    response: [
      "There are many common challenges people face when learning $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some resources for learning more about (.*)?/i,
    response: [
      "There are many resources available for learning more about $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some current trends in (.*)?/i,
    response: [
      "There are many current trends in $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some best practices for (.*)?/i,
    response: [
      "There are many best practices for $1, depending on your goals and experience level. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some common mistakes people make when (.*)?/i,
    response: [
      "There are many common mistakes people make when $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern:
      /what are some important considerations to keep in mind when (.*)?/i,
    response: [
      "There are many important considerations to keep in mind when $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /can you compare and contrast (.) and (.)?/i,
    response: [
      "Sure, I can compare and contrast $1 and $2. What specifically would you like to know?",
    ],
  },
  {
    pattern: /what are some future developments in (.*)?/i,
    response: [
      "There are many potential future developments in $1. Would you like me to provide you with some examples?",
    ],
  },

  {
    pattern: /what are some ethical implications of (.*)?/i,
    response: [
      "There are many potential ethical implications of $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some social impacts of (.*)?/i,
    response: [
      "There are many potential social impacts of $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some economic impacts of (.*)?/i,
    response: [
      "There are many potential economic impacts of $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some environmental impacts of (.*)?/i,
    response: [
      "There are many potential environmental impacts of $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some technological advancements related to (.*)?/i,
    response: [
      "There are many potential technological advancements related to $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some common misconceptions about (.*)?/i,
    response: [
      "There are many common misconceptions about $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some unique features of (.*)?/i,
    response: [
      "There are many unique features of $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some examples of successful implementations of (.*)?/i,
    response: [
      "There are many examples of successful implementations of $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some limitations of (.*)?/i,
    response: [
      "There are many limitations of $1. Would you like me to provide you with some examples?",
    ],
  },
  {
    pattern: /what are some possible future applications of (.*)?/i,
    response: [
      "There are many possible future applications of $1. Would you like me to provide you with some examples?",
    ],
  },

  {
    pattern: /what are some health benefits of eating potatoes?/i,
    response: [
      "Potatoes are a good source of several nutrients, including vitamin C, potassium, and dietary fiber. Would you like me to provide you with more information about the health benefits of eating potatoes?",
    ],
  },
  {
    pattern: /what are some ways to prepare potatoes that are healthy?/i,
    response: [
      "Potatoes can be prepared in many ways that are healthy, such as baked or boiled with skin on, or roasted with a small amount of oil. Would you like me to provide you with more information about healthy ways to prepare potatoes?",
    ],
  },
  {
    pattern: /what are some common types of potatoes?/i,
    response: [
      "There are many common types of potatoes, such as Russet, Yukon Gold, and Red potatoes. Would you like me to provide you with more information about different types of potatoes?",
    ],
  },
  {
    pattern: /what are some popular potato dishes from around the world?/i,
    response: [
      "There are many popular potato dishes from around the world, such as French fries, mashed potatoes, and potato salad. Would you like me to provide you with more information about popular potato dishes?",
    ],
  },
  {
    pattern: /what are some interesting facts about potatoes?/i,
    response: [
      "There are many interesting facts about potatoes, such as that they were first cultivated in Peru more than 7,000 years ago. Would you like me to provide you with more information about interesting facts about potatoes?",
    ],
  },
  {
    pattern: /what are some ways to store potatoes to keep them fresh longer?/i,
    response: [
      "Potatoes can be stored in a cool, dark, and dry place to keep them fresh longer. Would you like me to provide you with more information about how to store potatoes?",
    ],
  },
  {
    pattern:
      /what are some common potato pests and diseases to watch out for?/i,
    response: [
      "There are many common pests and diseases that can affect potatoes, such as potato beetles and late blight. Would you like me to provide you with more information about common potato pests and diseases?",
    ],
  },
  {
    pattern: /what are some ways to cook potatoes quickly?/i,
    response: [
      "Potatoes can be cooked quickly in many ways, such as microwaving or boiling. Would you like me to provide you with more information about ways to cook potatoes quickly?",
    ],
  },
  {
    pattern: /what are some creative ways to use leftover potatoes?/i,
    response: [
      "Leftover potatoes can be used in many creative ways, such as mashed potato patties or potato soup. Would you like me to provide you with more information about creative ways to use leftover potatoes?",
    ],
  },
  {
    pattern:
      /what are some cultural significance of potatoes in certain countries?/i,
    response: [
      "Potatoes have cultural significance in many countries, such as Ireland where they are a traditional food and symbol of national pride. Would you like me to provide you with more information about the cultural significance of potatoes in certain countries?",
    ],
  },
  {
    pattern: /what if (.*) happened?/i,
    response: [
      "That's an interesting hypothetical question. What do you think would happen if $1 occurred?",
    ],
  },
  {
    pattern: /how would you handle it if (.*) happened?/i,
    response: [
      "That's a good question. How do you think you would handle it if $1 occurred?",
    ],
  },
  {
    pattern: /what would be the consequences if (.*) happened?/i,
    response: [
      "It's hard to say for sure, but there could be many potential consequences if $1 occurred. What do you think some of those consequences might be?",
    ],
  },
  {
    pattern: /what would you do differently if (.*) happened?/i,
    response: [
      "That's an interesting question. What do you think you would do differently if $1 occurred?",
    ],
  },
  {
    pattern: /what would the world be like if (.*) didn't exist?/i,
    response: [
      "It's hard to say for sure, but the world could be quite different if $1 didn't exist. What do you think the world would be like?",
    ],
  },
  {
    pattern: /what if there was a better way to (.*)?/i,
    response: [
      "That's an interesting hypothetical question. What do you think would happen if there was a better way to $1?",
    ],
  },
  {
    pattern: /what if (.*) was suddenly made illegal?/i,
    response: [
      "That's an interesting hypothetical question. What do you think would happen if $1 was suddenly made illegal?",
    ],
  },
  {
    pattern: /what if everyone suddenly stopped (.*)?/i,
    response: [
      "That's an interesting hypothetical question. What do you think would happen if everyone suddenly stopped $1?",
    ],
  },
  {
    pattern: /what if you had unlimited resources to (.*)?/i,
    response: [
      "That's an interesting hypothetical question. What do you think you would do if you had unlimited resources to $1?",
    ],
  },
  {
    pattern: /what if you were suddenly unable to (.*)?/i,
    response: [
      "That's an interesting hypothetical question. What do you think you would do if you were suddenly unable to $1?",
    ],
  },
  {
    pattern: /elephant/i,
    response: [
      "Elephants are fascinating creatures. Did you know that they are the largest land animals on Earth?",
    ],
  },
  {
    pattern: /knees/i,
    response: [
      "Knees are important joints in the body that allow us to walk, run, and jump. It's important to take care of them by stretching and exercising regularly.",
    ],
  },
  {
    pattern: /ocean/i,
    response: [
      "The ocean covers more than 70% of the Earth's surface and contains a diverse range of marine life. Have you ever been to the ocean?",
    ],
  },
  {
    pattern: /mountain/i,
    response: [
      "Mountains are some of the most majestic natural features on Earth, and they offer stunning views and opportunities for outdoor activities like hiking and skiing.",
    ],
  },
  {
    pattern: /coffee/i,
    response: [
      "Coffee is one of the most popular beverages in the world, and it's enjoyed by millions of people every day. Do you like coffee?",
    ],
  },
  {
    pattern: /music/i,
    response: [
      "Music is a universal language that can bring people together and evoke strong emotions. What's your favorite type of music?",
    ],
  },
  {
    pattern: /dog/i,
    response: [
      "Dogs are often referred to as man's best friend, and for good reason. They are loyal, affectionate, and make great companions.",
    ],
  },
  {
    pattern: /book/i,
    response: [
      "Books are a wonderful way to explore new worlds and ideas, and they can provide endless hours of entertainment and education. What's your favorite book?",
    ],
  },
  {
    pattern: /sun/i,
    response: [
      "The sun is the center of our solar system, and it provides warmth and light that is essential for life on Earth. Have you ever watched a sunrise or sunset?",
    ],
  },
  {
    pattern: /pizza/i,
    response: [
      "Pizza is one of the most popular foods in the world, and there are endless variations and toppings to choose from. What's your favorite type of pizza?",
    ],
  },
  {
    pattern: /car/i,
    response: [
      "Cars are a common mode of transportation, and they have revolutionized the way we travel and commute. Do you have a favorite type of car?",
    ],
  },
  {
    pattern: /cat/i,
    response: [
      "Cats are popular pets that are known for their independence, intelligence, and playful personalities. Do you have a cat or know someone who does?",
    ],
  },
  {
    pattern: /phone/i,
    response: [
      "Phones are essential communication devices that have evolved dramatically over the years. Do you prefer using a certain type of phone or operating system?",
    ],
  },
  {
    pattern: /internet/i,
    response: [
      "The internet is a vast network that connects people, information, and resources from all over the world. It has transformed the way we live, work, and communicate.",
    ],
  },
  {
    pattern: /bicycle/i,
    response: [
      "Bicycles are a sustainable and efficient mode of transportation that also provide great exercise and recreational opportunities. Do you enjoy riding a bike?",
    ],
  },
  {
    pattern: /bookshelf/i,
    response: [
      "Bookshelves are a great way to organize and display books, and they can also add character and style to a room. Do you have a bookshelf at home?",
    ],
  },
  {
    pattern: /cookie/i,
    response: [
      "Cookies are a popular dessert or snack that come in many different flavors and varieties. What's your favorite type of cookie?",
    ],
  },
  {
    pattern: /beach/i,
    response: [
      "Beaches are a popular destination for relaxation, recreation, and enjoying the natural beauty of the ocean. Do you have a favorite beach that you've been to?",
    ],
  },
  {
    pattern: /movie/i,
    response: [
      "Movies are a popular form of entertainment that can transport us to different worlds, evoke emotions, and tell powerful stories. What's your favorite movie?",
    ],
  },
  {
    pattern: /keyboard/i,
    response: [
      "Keyboards are essential tools for typing, coding, and navigating computer interfaces. Do you prefer using a certain type of keyboard or switch mechanism?",
    ],
  },
  {
    pattern: /tea/i,
    response: [
      "Tea is a popular beverage that is enjoyed in many different cultures around the world. There are many different types and flavors of tea to choose from. What's your favorite type of tea?",
    ],
  },
  {
    pattern: /guitar/i,
    response: [
      "Guitars are popular musical instruments that can be used to play a wide range of music, from classical to rock and roll. Do you play the guitar or know someone who does?",
    ],
  },
  {
    pattern: /camera/i,
    response: [
      "Cameras are essential tools for capturing memories, preserving moments, and expressing creativity. Do you prefer using a certain type of camera or brand?",
    ],
  },
  {
    pattern: /art/i,
    response: [
      "Art is a form of expression that can take many different forms, from painting and sculpture to music and dance. What's your favorite type of art?",
    ],
  },
  {
    pattern: /plant/i,
    response: [
      "Plants are essential for life on Earth, and they can also add beauty and color to our homes and gardens. Do you have a favorite type of plant or flower?",
    ],
  },
  {
    pattern: /yoga/i,
    response: [
      "Yoga is a popular form of exercise and relaxation that can help improve flexibility, strength, and mindfulness. Have you ever tried practicing yoga?",
    ],
  },
  {
    pattern: /dessert/i,
    response: [
      "Desserts are a sweet and satisfying way to end a meal or celebrate a special occasion. What's your favorite type of dessert?",
    ],
  },
  {
    pattern: /basketball/i,
    response: [
      "Basketball is a popular sport that can be played both indoors and outdoors, and it requires skill, teamwork, and athleticism. Do you enjoy playing basketball or watching games?",
    ],
  },
  {
    pattern: /fashion/i,
    response: [
      "Fashion is a constantly evolving industry that can be influenced by culture, history, and current events. What's your favorite fashion trend or style?",
    ],
  },
  {
    pattern: /travel/i,
    response: [
      "Traveling can be an exciting and rewarding way to explore new places, learn about different cultures, and create lasting memories. What's your favorite travel destination or experience?",
    ],
  },
  {
    pattern: /pizza toppings/i,
    response: [
      "Pizza toppings are a personal choice and can vary depending on taste preferences and cultural influences. What are some of your favorite pizza toppings?",
    ],
  },
  {
    pattern: /parks/i,
    response: [
      "Parks are important green spaces that can provide a range of recreational opportunities, from picnics and sports to hiking and birdwatching. Do you have a favorite park that you like to visit?",
    ],
  },
  {
    pattern: /dance/i,
    response: [
      "Dancing is a popular form of expression and exercise that can take many different forms, from ballroom to hip hop. Do you enjoy dancing or watching dance performances?",
    ],
  },
  {
    pattern: /history/i,
    response: [
      "History can provide valuable insights into the past and help us understand the present. What's your favorite historical event or time period?",
    ],
  },
  {
    pattern: /breakfast/i,
    response: [
      "Breakfast is often referred to as the most important meal of the day, and it can provide essential nutrients and energy for the day ahead. What's your favorite breakfast food or dish?",
    ],
  },
  {
    pattern: /volunteer/i,
    response: [
      "Volunteering is a great way to give back to the community and make a positive impact in the world. Have you ever volunteered for a cause or organization?",
    ],
  },
  {
    pattern: /chocolate/i,
    response: [
      "Chocolate is a popular and delicious treat that can be enjoyed in many different forms, from candy bars to hot cocoa. What's your favorite type of chocolate?",
    ],
  },
  {
    pattern: /sunset/i,
    response: [
      "Sunsets can be some of the most beautiful and peaceful moments of the day, and they can provide great opportunities for reflection and relaxation. Do you have a favorite sunset memory?",
    ],
  },
  {
    pattern: /skiing/i,
    response: [
      "Skiing is a popular winter sport that can be enjoyed by people of all ages and skill levels, and it can provide a great workout and outdoor experience. Do you enjoy skiing or snowboarding?",
    ],
  },
  {
    pattern: /meditation/i,
    response: [
      "Meditation is a popular practice that can help improve mental and physical well-being, reduce stress, and promote mindfulness. Have you ever tried practicing meditation?",
    ],
  },
  {
    pattern: /football/i,
    response: [
      "Football is a popular sport that requires physical and mental skills, teamwork, and strategy. Do you enjoy playing football or watching games?",
    ],
  },
  {
    pattern: /oxygen/i,
    response: [
      "Oxygen is an essential element for human and animal life, and it makes up a significant portion of the Earth's atmosphere. Do you know any interesting facts about oxygen?",
    ],
  },
  {
    pattern: /hiking/i,
    response: [
      "Hiking is a great way to explore nature, get exercise, and enjoy the outdoors. Do you have a favorite hiking trail or destination?",
    ],
  },
  {
    pattern: /sushi/i,
    response: [
      "Sushi is a popular Japanese cuisine that typically consists of raw fish, rice, and seaweed. What's your favorite type of sushi?",
    ],
  },
  {
    pattern: /sunscreen/i,
    response: [
      "Sunscreen is an important product that can help protect our skin from the harmful effects of the sun, including sunburn, premature aging, and skin cancer. Do you have a favorite brand or type of sunscreen?",
    ],
  },
  {
    pattern: /swimming/i,
    response: [
      "Swimming is a popular form of exercise and recreation that can provide a great workout and be enjoyed in a variety of settings, from pools to lakes and oceans. Do you enjoy swimming?",
    ],
  },
  {
    pattern: /photography/i,
    response: [
      "Photography is a popular hobby and profession that can be used to capture and preserve memories, document events, and express creativity. Do you enjoy taking photos or looking at photographs?",
    ],
  },
  {
    pattern: /dessert/i,
    response: [
      "Desserts are a sweet and satisfying way to end a meal or celebrate a special occasion. What's your favorite type of dessert?",
    ],
  },
  {
    pattern: /fishing/i,
    response: [
      "Fishing is a popular outdoor activity that can provide a sense of relaxation, challenge, and reward. Do you enjoy fishing or know someone who does?",
    ],
  },
  {
    pattern: /coffee shops/i,
    response: [
      "Coffee shops are popular gathering places that offer a range of beverages, snacks, and atmospheres. Do you have a favorite coffee shop or chain?",
    ],
  },
  {
    pattern: /basketball/i,
    response: [
      "Basketball is a popular sport that requires skill, athleticism, and teamwork. Do you enjoy playing basketball or watching games?",
    ],
  },
  {
    pattern: /gardening/i,
    response: [
      "Gardening is a popular hobby that can provide a sense of accomplishment, connection to nature, and opportunities for creativity. Do you have a green thumb or enjoy gardening?",
    ],
  },
  {
    pattern: /sailing/i,
    response: [
      "Sailing is a popular recreational activity that involves navigating a vessel on water using the wind. Do you enjoy sailing or know someone who does?",
    ],
  },
  {
    pattern: /cooking/i,
    response: [
      "Cooking is a valuable life skill that can provide a sense of creativity, satisfaction, and healthy eating habits. Do you enjoy cooking or trying new recipes?",
    ],
  },
  {
    pattern: /board games/i,
    response: [
      "Board games are a popular form of entertainment that can bring people together, promote problem-solving skills, and provide hours of fun. Do you have a favorite board game?",
    ],
  },
  {
    pattern: /writing/i,
    response: [
      "Writing is a valuable skill that can be used for personal expression, communication, and creativity. Do you enjoy writing or have any favorite authors?",
    ],
  },
  {
    pattern: /ice cream/i,
    response: [
      "Ice cream is a popular frozen dessert that can come in many different flavors and varieties. What's your favorite type of ice cream?",
    ],
  },
  {
    pattern: /concerts/i,
    response: [
      "Concerts are popular events that can provide a sense of community, entertainment, and live music experiences. Do you have a favorite band or musician that you've seen in concert?",
    ],
  },
  {
    pattern: /knitting/i,
    response: [
      "Knitting is a popular hobby that can provide a sense of relaxation, creativity, and the ability to make personalized gifts. Do you enjoy knitting or know someone who does?",
    ],
  },
  {
    pattern: /beauty/i,
    response: [
      "Beauty is a subjective concept that can encompass a range of qualities, from physical appearance to personality traits. What's your definition of beauty?",
    ],
  },
  {
    pattern: /running/i,
    response: [
      "Running is a popular form of exercise that can improve cardiovascular health, endurance, and mental well-being. Do you enjoy running or know someone who does?",
    ],
  },
  {
    pattern: /crafting/i,
    response: [
      "Crafting is a popular hobby that can provide a sense of creativity, relaxation, and the ability to make personalized gifts or home decor. Do you enjoy crafting or know someone who does?",
    ],
  },
  {
    pattern: /horses/i,
    response: [
      "Horses are majestic animals that can be used for transportation, sports, or leisure activities like horseback riding. Do you enjoy horseback riding or know someone who does?",
    ],
  },
  {
    pattern: /scent/i,
    response: [
      "Scents can evoke memories, emotions, and create a specific atmosphere or mood. What's your favorite scent or fragrance?",
    ],
  },
  {
    pattern: /puzzles/i,
    response: [
      "Puzzles are a popular form of entertainment that can promote problem-solving skills, cognitive function, and relaxation. Do you have a favorite type of puzzle?",
    ],
  },
  {
    pattern: /swimming pools/i,
    response: [
      "Swimming pools are popular recreational spaces that can provide a refreshing way to cool off, exercise, and have fun. Do you have a favorite swimming pool or know someone who does?",
    ],
  },
  {
    pattern: /ice skating/i,
    response: [
      "Ice skating is a popular winter activity that can provide a sense of adventure, exercise, and fun. Do you enjoy ice skating or know someone who does?",
    ],
  },
  {
    pattern: /mountain biking/i,
    response: [
      "Mountain biking is a popular outdoor activity that can provide a sense of challenge, adventure, and the ability to explore natural landscapes. Do you enjoy mountain biking or know someone who does?",
    ],
  },
  {
    pattern: /poetry/i,
    response: [
      "Poetry is a form of creative writing that can evoke emotions, express thoughts, and tell stories in a condensed and rhythmic form. Do you enjoy poetry or have any favorite poets?",
    ],
  },
  {
    pattern: /waterfalls/i,
    response: [
      "Waterfalls are natural wonders that can provide a sense of peace, beauty, and adventure. Do you have a favorite waterfall that you've seen or want to see?",
    ],
  },
  {
    pattern: /fitness/i,
    response: [
      "Fitness is an important aspect of health and well-being that can include a range of activities, from weightlifting and cardio to yoga and Pilates. Do you have a favorite type of fitness activity?",
    ],
  },
  {
    pattern: /tea/i,
    response: [
      "Tea is a popular beverage that can provide a range of health benefits and a sense of relaxation. Do you have a favorite type of tea or know any interesting tea facts?",
    ],
  },
  {
    pattern: /photography/i,
    response: [
      "Photography is a popular hobby and profession that can be used to capture and preserve memories, document events, and express creativity. Do you enjoy taking photos or looking at photographs?",
    ],
  },
  {
    pattern: /gardening/i,
    response: [
      "Gardening is a popular hobby that can provide a sense of accomplishment, connection to nature, and opportunities for creativity. Do you have a green thumb or enjoy gardening?",
    ],
  },
  {
    pattern: /science/i,
    response: [
      "Science is a valuable field of study that can help us understand the world around us and make important discoveries. What's your favorite scientific field or discovery?",
    ],
  },
  {
    pattern: /wine/i,
    response: [
      "Wine is a popular alcoholic beverage that can come in many different varieties and flavors. What's your favorite type of wine or do you know any interesting wine facts?",
    ],
  },
  {
    pattern: /camping/i,
    response: [
      "Camping is a popular outdoor activity that can provide a sense of adventure, relaxation, and connection to nature. Do you enjoy camping or know someone who does?",
    ],
  },
  {
    pattern: /yoga/i,
    response: [
      "Yoga is a popular form of exercise and relaxation that can help improve flexibility, strength, and mindfulness. Have you ever tried practicing yoga?",
    ],
  },
  {
    pattern: /craft beer/i,
    response: [
      "Craft beer is a popular type of beer that is made in small batches by independent breweries. What's your favorite type of craft beer or do you have any interesting craft beer facts?",
    ],
  },
  {
    pattern: /music festivals/i,
    response: [
      "Music festivals are popular events that can provide a sense of community, entertainment, and live music experiences. Do you have a favorite music festival or musician that you've seen in concert?",
    ],
  },
  {
    pattern: /ski resorts/i,
    response: [
      "Ski resorts are popular destinations for winter sports enthusiasts that offer a range of activities, from skiing and snowboarding to après-ski fun. Do you have a favorite ski resort or know someone who enjoys skiing?",
    ],
  },
  {
    pattern: /horror movies/i,
    response: [
      "Horror movies are a popular form of entertainment that can provide a sense of thrill, suspense, and fear. Do you enjoy watching horror movies or have any favorite horror movies?",
    ],
  },
  {
    pattern: /board games/i,
    response: [
      "Board games are a popular form of entertainment that can bring people together, promote problem-solving skills, and provide hours of fun. Do you have a favorite board game or know someone who enjoys playing board games?",
    ],
  },
  {
    pattern: /fruit/i,
    response: [
      "Fruits are important sources of vitamins, fiber, and antioxidants that can provide a range of health benefits. What's your favorite type of fruit or do you know any interesting fruit facts?",
    ],
  },
  {
    pattern: /hiking trails/i,
    response: [
      "Hiking trails are popular outdoor destinations that offer a range of experiences, from scenic views and natural wonders to physical challenges and adventure. Do you have a favorite hiking trail or know someone who enjoys hiking?",
    ],
  },
  {
    pattern: /video games/i,
    response: [
      "Video games are a popular form of entertainment that can provide a range of experiences, from action and adventure to strategy and simulation. Do you enjoy playing video games or have any favorite video games?",
    ],
  },
  {
    pattern: /national parks/i,
    response: [
      "National parks are important protected areas that can provide a range of recreational opportunities, from hiking and camping to wildlife watching and scenic drives. Do you have a favorite national park or know any interesting national park facts?",
    ],
  },
  {
    pattern: /baking/i,
    response: [
      "Baking is a popular hobby that can provide a sense of creativity, satisfaction, and the ability to make delicious treats. Do you enjoy baking or have any favorite baking recipes?",
    ],
  },
  {
    pattern: /museums/i,
    response: [
      "Museums are important cultural institutions that can provide a range of educational and artistic experiences, from history and science to art and culture. Do you have a favorite museum or know any interesting museum facts?",
    ],
  },
  {
    pattern: /paddleboarding/i,
    response: [
      "Paddleboarding is a popular outdoor activity that can provide a sense of relaxation, adventure, and exercise. Do you enjoy paddleboarding or know someone who does?",
    ],
  },

  {
    pattern: /bicycling/i,
    response: [
      "Bicycling is a popular form of exercise and transportation that can provide a range of health benefits and environmental advantages. Do you enjoy bicycling or has my mother ever mentioned it?",
    ],
  },
  {
    pattern: /street art/i,
    response: [
      "Street art is a form of visual art that can be found in public spaces, from graffiti and murals to installations and sculptures. Have you ever seen any interesting street art, or has my mother mentioned it?",
    ],
  },
  {
    pattern: /skiing/i,
    response: [
      "Skiing is a popular winter sport that can provide a sense of challenge, adventure, and fun. Have you ever been skiing or has my mother ever tried it?",
    ],
  },
  {
    pattern: /scuba diving/i,
    response: [
      "Scuba diving is a popular underwater activity that can provide a sense of exploration, adventure, and appreciation for marine life. Have you ever been scuba diving or has my mother expressed interest in it?",
    ],
  },
  {
    pattern: /painting/i,
    response: [
      "Painting is a popular form of artistic expression that can provide a sense of creativity, relaxation, and the ability to make beautiful works of art. Do you enjoy painting or has my mother ever tried it?",
    ],
  },
  {
    pattern: /desserts/i,
    response: [
      "Desserts are a sweet and satisfying way to end a meal or celebrate a special occasion. What's your favorite type of dessert, or has my mother ever shared her favorite with you?",
    ],
  },
  {
    pattern: /traveling/i,
    response: [
      "Traveling is a popular way to explore new places, cultures, and experiences. Have you ever traveled to any interesting destinations, or has my mother shared any memorable travel stories with you?",
    ],
  },
  {
    pattern: /yoga/i,
    response: [
      "Yoga is a popular form of exercise and relaxation that can help improve flexibility, strength, and mindfulness. Have you ever tried practicing yoga, or has my mother ever mentioned it?",
    ],
  },
  {
    pattern: /rock climbing/i,
    response: [
      "Rock climbing is a popular outdoor activity that can provide a sense of challenge, adventure, and physical and mental strength. Have you ever tried rock climbing, or has my mother expressed any interest in it?",
    ],
  },
  {
    pattern: /book clubs/i,
    response: [
      "Book clubs are a popular way to engage with literature and connect with others who share similar interests. Have you ever participated in a book club, or has my mother mentioned being part of one?",
    ],
  },
  { pattern: /yes/i, response: ["I see.", "I understand.", "Interesting."] },
  { pattern: /no/i, response: ["Why not?", "Are you sure?", "Okay."] },

  {
    pattern: /i'm sorry/i,
    response: [
      "What are you apologizing for?",
      "It's okay, there's no need to apologize.",
      "Thank you for apologizing, but there's no harm done.",
    ],
  },
  {
    pattern: /thank you/i,
    response: ["You're welcome!", "Anytime!", "No problem."],
  },
  {
    pattern: /sorry/i,
    response: [
      "It's okay, no harm done.",
      "No worries.",
      "Thank you for apologizing.",
    ],
  },
];
