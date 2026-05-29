const SIMULATOR_DATA = {
  presets: {
    friction: {
      name: "The Distracted Developer Day",
      description: "A workday showing how high meeting stress triggers post-meeting distraction.",
      ddf: `[ACTIVITY_LOG]
@2026-05-30|Sleep:7.5h(😴)|Coding:1.5h(🔥)|Meetings:1.0h(😤)|Distraction:0.5h(😵)|Coding:2.0h(🔥)|Running:0.75h(🚀)|Personal:2.0h(😌)

[TOTALS]
Sleep:7.5h (1 sessions)
Coding:3.5h (2 sessions)
Meetings:1.0h (1 sessions)
Distraction:0.5h (1 sessions)
Running:0.75h (1 sessions)
Personal:2.0h (1 sessions)

[INTENTIONS]
work - Coding:3.5h/4.0h (MISS)
personal - Running:0.75h/0.5h (MET)`,
      tiers: {
        guest: {
          narrator: {
            json: {
              "answer": "You started your day with 7.5 hours of sleep. Later, you engaged in 1.5 hours of coding, followed by a 1.0-hour meeting. You spent 0.5 hours on distraction, and then returned to coding for another 2.0 hours. In the evening, you went for a 0.75-hour run and had 2.0 hours of personal time.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Based on daily target."
                }
              ]
            },
            ui: {
              mainResponse: "You started your day with 7.5 hours of sleep. Later, you engaged in 1.5 hours of coding, followed by a 1.0-hour meeting. You spent 0.5 hours on distraction, and then returned to coding for another 2.0 hours. In the evening, you went for a 0.75-hour run and had 2.0 hours of personal time.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Based on daily target." }
              ]
            }
          }
        },
        free: {
          narrator: {
            json: {
              "answer": "Your day began after waking up from a tired sleep (😴) of 7.5 hours. You jumped straight into coding with a focused state (🔥) for 1.5 hours, but this was interrupted by a stressed (😤) 1.0-hour meeting. You experienced a distracted (😵) 0.5-hour period before recovering your focus (🔥) for 2.0 hours of coding. Later, you felt motivated (🚀) during a 0.75-hour run, and wrapped up with a calm (😌) 2.0 hours of personal time.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Maintain your coding routine."
                }
              ]
            },
            ui: {
              mainResponse: "Your day began after waking up from a tired sleep (😴) of 7.5 hours. You jumped straight into coding with a focused state (🔥) for 1.5 hours, but this was interrupted by a stressed (😤) 1.0-hour meeting. You experienced a distracted (😵) 0.5-hour period before recovering your focus (🔥) for 2.0 hours of coding. Later, you felt motivated (🚀) during a 0.75-hour run, and wrapped up with a calm (😌) 2.0 hours of personal time.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Maintain your coding routine." }
              ]
            }
          },
          reflector: {
            json: {
              "answer": "You spent your day navigating shifts in energy, beginning with a restful 7.5-hour sleep. You brought high focus and intensity to coding, though meetings introduced temporary stress. You allowed yourself a brief moment of distraction before returning to your work, and later found motivation and calm in your running and personal reflection.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Keep steady focus blocks."
                }
              ]
            },
            ui: {
              mainResponse: "You spent your day navigating shifts in energy, beginning with a restful 7.5-hour sleep. You brought high focus and intensity to coding, though meetings introduced temporary stress. You allowed yourself a brief moment of distraction before returning to your work, and later found motivation and calm in your running and personal reflection.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Keep steady focus blocks." }
              ]
            }
          }
        },
        pro: {
          narrator: {
            json: {
              "answer": "You spent 7.5 hours resting. You then spent 1.5 hours in deep coding, moved to a stressful meeting, drifted for half an hour, then coded for another 2 hours. Your day ended with a run and some personal time.",
              "insight": "Your energy peaked in the early morning and late afternoon during coding, with a mid-day dip surrounding the meeting.",
              "suggestion": "Align your most complex coding tasks with your morning focus window.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Narrative pacing suggests early starts."
                }
              ]
            },
            ui: {
              mainResponse: "You spent 7.5 hours resting. You then spent 1.5 hours in deep coding, moved to a stressful meeting, drifted for half an hour, then coded for another 2 hours. Your day ended with a run and some personal time.",
              insight: "Your energy peaked in the early morning and late afternoon during coding, with a mid-day dip surrounding the meeting.",
              suggestion: "Align your most complex coding tasks with your morning focus window.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Narrative pacing suggests early starts." }
              ]
            }
          },
          reflector: {
            json: {
              "answer": "Your day consisted of focused creation, necessary collaboration, and restorative physical activity. You dedicated 3.5 hours to coding, countered stress from meetings with a brief pause, and finished the day in motion.",
              "insight": "The juxtaposition of meeting stress (😤) and focused coding (🔥) shows that you crave independent, quiet time to do your best work.",
              "suggestion": "Consider blocking out consolidated focus time away from collaborative meetings.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Running",
                  "targetSeconds": 2700,
                  "period": 1,
                  "reason": "Recharge after high-cognitive load tasks."
                }
              ]
            },
            ui: {
              mainResponse: "Your day consisted of focused creation, necessary collaboration, and restorative physical activity. You dedicated 3.5 hours to coding, countered stress from meetings with a brief pause, and finished the day in motion.",
              insight: "The juxtaposition of meeting stress (😤) and focused coding (🔥) shows that you crave independent, quiet time to do your best work.",
              suggestion: "Consider blocking out consolidated focus time away from collaborative meetings.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Running", target: "45m / Daily", reason: "Recharge after high-cognitive load tasks." }
              ]
            }
          },
          analyst: {
            json: {
              "answer": "You logged 14.75 total tracked hours today. 3.5 hours (24%) were allocated to Coding, 1.0 hour (7%) to Meetings, 0.5 hours (3%) to Distraction, 0.75 hours (5%) to Running, 2.0 hours (13.5%) to Personal time, and 7.5 hours (50.5%) to Sleep.",
              "insight": "Coding sessions logged high focus levels (🔥) but distraction (😵) occurred immediately post-meetings, highlighting a transition friction point.",
              "suggestion": "Schedule a 10-minute buffer after meetings to reduce transition distraction.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Reach daily goal of 4 hours."
                }
              ]
            },
            ui: {
              mainResponse: "You logged 14.75 total tracked hours today. 3.5 hours (24%) were allocated to Coding, 1.0 hour (7%) to Meetings, 0.5 hours (3%) to Distraction, 0.75 hours (5%) to Running, 2.0 hours (13.5%) to Personal time, and 7.5 hours (50.5%) to Sleep.",
              insight: "Coding sessions logged high focus levels (🔥) but distraction (😵) occurred immediately post-meetings, highlighting a transition friction point.",
              suggestion: "Schedule a 10-minute buffer after meetings to reduce transition distraction.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Reach daily goal of 4 hours." }
              ]
            }
          },
          reflection_mirror: {
            json: {
              "answer": "Today recorded 3.5 hours of coding, 1.0 hour of meetings, 0.5 hours of distraction, 0.75 hours of running, 2.0 hours of personal time, and 7.5 hours of sleep.",
              "insight": "Focused states were logged during coding, stress during meetings, distraction in between, motivation during running, and calm during personal time.",
              "suggestion": "Observation: You missed your coding target by 0.5 hours, and exceeded your running target by 0.25 hours.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Log of target vs actual."
                }
              ]
            },
            ui: {
              mainResponse: "Today recorded 3.5 hours of coding, 1.0 hour of meetings, 0.5 hours of distraction, 0.75 hours of running, 2.0 hours of personal time, and 7.5 hours of sleep.",
              insight: "Focused states were logged during coding, stress during meetings, distraction in between, motivation during running, and calm during personal time.",
              suggestion: "Observation: You missed your coding target by 0.5 hours, and exceeded your running target by 0.25 hours.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Log of target vs actual." }
              ]
            }
          }
        },
        ai_plus: {
          narrator: {
            json: {
              "answer": "You spent 7.5 hours sleeping. Upon waking, you put in 1.5 hours of coding. A stressed 1-hour meeting followed. You drifted for 30 minutes, then returned to code for another 2 hours. Your evening wrapped up with a run and some quiet personal time.",
              "insight": "You completed the core of your workday before noon, while your physical movement was reserved for the late afternoon.",
              "suggestion": "1. Schedule your complex development tasks for early morning.\n2. Utilize runs to decompress after meetings.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Ensure focused morning time stays clear."
                }
              ]
            },
            ui: {
              mainResponse: "You spent 7.5 hours sleeping. Upon waking, you put in 1.5 hours of coding. A stressed 1-hour meeting followed. You drifted for 30 minutes, then returned to code for another 2 hours. Your evening wrapped up with a run and some quiet personal time.",
              insight: "You completed the core of your workday before noon, while your physical movement was reserved for the late afternoon.",
              suggestion: "1. Schedule your complex development tasks for early morning.\n2. Utilize runs to decompress after meetings.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Ensure focused morning time stays clear." }
              ]
            }
          },
          reflector: {
            json: {
              "answer": "Your day blended deep concentration and high-tension meetings, balanced by active running and grounding personal reflection.",
              "insight": "Your subconscious is navigating the pull between creative isolation (Coding: 3.5h) and organizational syncs (Meetings: 1.0h). The 30-minute distraction block was an emotional decompression state rather than pure idle time.",
              "suggestion": "1. Integrate a 10-minute mindfulness interval after high-stimulus meetings.\n2. Dedicate at least one afternoon slot to solitary research without tracking pressure.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Mindfulness",
                  "targetSeconds": 600,
                  "period": 1,
                  "reason": "Transition healthily from group spaces."
                }
              ]
            },
            ui: {
              mainResponse: "Your day blended deep concentration and high-tension meetings, balanced by active running and grounding personal reflection.",
              insight: "Your subconscious is navigating the pull between creative isolation (Coding: 3.5h) and organizational syncs (Meetings: 1.0h). The 30-minute distraction block was an emotional decompression state rather than pure idle time.",
              suggestion: "1. Integrate a 10-minute mindfulness interval after high-stimulus meetings.\n2. Dedicate at least one afternoon slot to solitary research without tracking pressure.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Mindfulness", target: "10m / Daily", reason: "Transition healthily from group spaces." }
              ]
            }
          },
          analyst: {
            json: {
              "answer": "You executed a 14.75-hour tracked cycle. Focus duration was 3.5 hours, sync duration was 1.0 hour, recovery was 9.5 hours (7.5h sleep + 2.0h personal), and active fitness was 0.75 hours.",
              "insight": "The meeting was a high-stress event (😤) that triggered a cognitive recovery gap (Distraction: 0.5h). The subsequent 2.0-hour coding session indicates strong resilience, but the transition gap represents an 12.5% loss in potential afternoon focus time.",
              "suggestion": "1. Batch all collaborative syncs on Tuesdays and Thursdays to preserve developer flow.\n2. Limit meeting durations to 45 minutes to minimize cognitive fatigue.\n3. Establish an automated calendar block for deep focus right after lunch.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Maximize consecutive flow blocks."
                }
              ]
            },
            ui: {
              mainResponse: "You executed a 14.75-hour tracked cycle. Focus duration was 3.5 hours, sync duration was 1.0 hour, recovery was 9.5 hours (7.5h sleep + 2.0h personal), and active fitness was 0.75 hours.",
              insight: "The meeting was a high-stress event (😤) that triggered a cognitive recovery gap (Distraction: 0.5h). The subsequent 2.0-hour coding session indicates strong resilience, but the transition gap represents an 12.5% loss in potential afternoon focus time.",
              suggestion: "1. Batch all collaborative syncs on Tuesdays and Thursdays to preserve developer flow.\n2. Limit meeting durations to 45 minutes to minimize cognitive fatigue.\n3. Establish an automated calendar block for deep focus right after lunch.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Maximize consecutive flow blocks." }
              ]
            }
          },
          reflection_mirror: {
            json: {
              "answer": "Today records: Coding (3.5 hours), Meetings (1.0 hour), Distraction (0.5 hours), Running (0.75 hours), Personal (2.0 hours), and Sleep (7.5 hours).",
              "insight": "Focus was sustained for 3.5 hours. Meetings introduced elevated heart rate/stress (😤). Running followed distraction, moving you back to a motivated state (🚀).",
              "suggestion": "1. Target was 4.0 hours for Coding; actual was 3.5 hours.\n2. Target was 0.5 hours for Running; actual was 0.75 hours.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Align actual coding to the 4.0h goal."
                }
              ]
            },
            ui: {
              mainResponse: "Today records: Coding (3.5 hours), Meetings (1.0 hour), Distraction (0.5 hours), Running (0.75 hours), Personal (2.0 hours), and Sleep (7.5 hours).",
              insight: "Focus was sustained for 3.5 hours. Meetings introduced elevated heart rate/stress (😤). Running followed distraction, moving you back to a motivated state (🚀).",
              suggestion: "1. Target was 4.0 hours for Coding; actual was 3.5 hours.\n2. Target was 0.5 hours for Running; actual was 0.75 hours.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Align actual coding to the 4.0h goal." }
              ]
            }
          },
          coach: {
            json: {
              "answer": "You put in solid work today, hitting 3.5 hours of coding and a motivated run. However, you missed your Coding target by 30 minutes, primarily due to a 30-minute distraction gap that formed immediately after your stressful meeting.",
              "insight": "Your data reveals a clear psychological pattern: when collaborative meetings spike your stress levels (😤), you unconsciously seek dopamine relief via short distraction sessions (😵). Resolving this transition friction is the key to hitting your focus targets consistently.",
              "suggestion": "1. Protect your morning coding window by moving meetings to the afternoon.\n2. Implement a 5-minute deep-breathing habit immediately post-meeting to reset your nervous system.\n3. Log a 'declutter' session of 5 minutes instead of falling into distraction.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Optimize energy for high-priority tasks."
                },
                {
                  "modeKey": "personal",
                  "subTag": "Breathing Reset",
                  "targetSeconds": 300,
                  "period": 1,
                  "reason": "De-escalate nervous system stress after syncs."
                }
              ]
            },
            ui: {
              mainResponse: "You put in solid work today, hitting 3.5 hours of coding and a motivated run. However, you missed your Coding target by 30 minutes, primarily due to a 30-minute distraction gap that formed immediately after your stressful meeting.",
              insight: "Your data reveals a clear psychological pattern: when collaborative meetings spike your stress levels (😤), you unconsciously seek dopamine relief via short distraction sessions (😵). Resolving this transition friction is the key to hitting your focus targets consistently.",
              suggestion: "1. Protect your morning coding window by moving meetings to the afternoon.\n2. Implement a 5-minute deep-breathing habit immediately post-meeting to reset your nervous system.\n3. Log a 'declutter' session of 5 minutes instead of falling into distraction.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Optimize energy for high-priority tasks." },
                { modeKey: "personal", subTag: "Breathing Reset", target: "5m / Daily", reason: "De-escalate nervous system stress after syncs." }
              ]
            }
          }
        }
      }
    },
    flow: {
      name: "The Peak Flow Saturday",
      description: "A meeting-free weekend sprint showing sustained deep focus and healthy recovery.",
      ddf: `[ACTIVITY_LOG]
@2026-05-31|Sleep:8.5h(😴)|Coding:3.0h(🔥)|Personal:1.0h(😌)|Coding:2.0h(🔥)|Running:1.0h(🚀)|Personal:3.0h(😌)

[TOTALS]
Sleep:8.5h (1 sessions)
Coding:5.0h (2 sessions)
Running:1.0h (1 sessions)
Personal:4.0h (2 sessions)

[INTENTIONS]
work - Coding:5.0h/4.0h (MET)
personal - Running:1.0h/0.75h (MET)`,
      tiers: {
        guest: {
          narrator: {
            json: {
              "answer": "You slept for 8.5 hours. Then you coded for 3.0 hours, took a 1.0-hour personal break, and coded for another 2.0 hours. You went for a 1.0-hour run and ended with 3.0 hours of personal time.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Based on daily target."
                }
              ]
            },
            ui: {
              mainResponse: "You slept for 8.5 hours. Then you coded for 3.0 hours, took a 1.0-hour personal break, and coded for another 2.0 hours. You went for a 1.0-hour run and ended with 3.0 hours of personal time.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Based on daily target." }
              ]
            }
          }
        },
        free: {
          narrator: {
            json: {
              "answer": "You woke up refreshed after 8.5 hours of sleep (😴). You immediately dived into focused coding (🔥) for 3.0 hours, followed by a relaxing (😌) 1.0-hour break. You returned to coding (🔥) for 2.0 hours, completed a motivated (🚀) 1.0-hour run, and wrapped up your evening with calm (😌) 3.0 hours of personal time.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Keep up the coding routine."
                }
              ]
            },
            ui: {
              mainResponse: "You woke up refreshed after 8.5 hours of sleep (😴). You immediately dived into focused coding (🔥) for 3.0 hours, followed by a relaxing (😌) 1.0-hour break. You returned to coding (🔥) for 2.0 hours, completed a motivated (🚀) 1.0-hour run, and wrapped up your evening with calm (😌) 3.0 hours of personal time.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Keep up the coding routine." }
              ]
            }
          },
          reflector: {
            json: {
              "answer": "Your day was defined by deep concentration and healthy recovery. You started with restorative rest, then spent 5.0 hours coding with high focus. You integrated a 1.0-hour personal break to reset, and followed your afternoon work with an energizing run, closing the weekend with calm reflection.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Keep steady focus blocks."
                }
              ]
            },
            ui: {
              mainResponse: "Your day was defined by deep concentration and healthy recovery. You started with restorative rest, then spent 5.0 hours coding with high focus. You integrated a 1.0-hour personal break to reset, and followed your afternoon work with an energizing run, closing the weekend with calm reflection.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Keep steady focus blocks." }
              ]
            }
          }
        },
        pro: {
          narrator: {
            json: {
              "answer": "You spent 8.5 hours in sleep. Your active day consisted of two deep work blocks totaling 5.0 hours of coding, broken up by 1.0 hour of personal rest. In the evening, you completed a 1.0-hour run, and spent 3.0 hours in personal reflection.",
              "insight": "Weekend cycles offer uninterrupted focus opportunities due to the lack of mid-day meeting overhead.",
              "suggestion": "Identify the elements of weekend routines that can be adapted for weekday mornings.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Sustain coding consistency."
                }
              ]
            },
            ui: {
              mainResponse: "You spent 8.5 hours in sleep. Your active day consisted of two deep work blocks totaling 5.0 hours of coding, broken up by 1.0 hour of personal rest. In the evening, you completed a 1.0-hour run, and spent 3.0 hours in personal reflection.",
              insight: "Weekend cycles offer uninterrupted focus opportunities due to the lack of mid-day meeting overhead.",
              suggestion: "Identify the elements of weekend routines that can be adapted for weekday mornings.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Sustain coding consistency." }
              ]
            }
          },
          reflector: {
            json: {
              "answer": "A day that centered on high creative production and physical recovery. You utilized meeting-free hours to sustain focus and closed with physical reset and family recovery.",
              "insight": "Having zero meetings (😤) kept your cognitive load low, enabling 5 hours of clean coding and a highly satisfying evening.",
              "suggestion": "Create meeting-free days on your calendar to protect this headspace.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Running",
                  "targetSeconds": 3600,
                  "period": 1,
                  "reason": "Maintain transition energy."
                }
              ]
            },
            ui: {
              mainResponse: "A day that centered on high creative production and physical recovery. You utilized meeting-free hours to sustain focus and closed with physical reset and family recovery.",
              insight: "Having zero meetings (😤) kept your cognitive load low, enabling 5 hours of clean coding and a highly satisfying evening.",
              suggestion: "Create meeting-free days on your calendar to protect this headspace.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Running", target: "1h 0m / Daily", reason: "Maintain transition energy." }
              ]
            }
          },
          analyst: {
            json: {
              "answer": "You logged 14.5 active hours. Coding occupied 5.0 hours (34.5%), running 1.0 hour (7%), personal time 4.0 hours (27.5%), and sleep 8.5 hours (59%). You met all intentions today.",
              "insight": "Without collaborative meetings, you achieved a 100% flow block success rate, sustaining high focus (🔥) for a combined 5 hours.",
              "suggestion": "Reserve meeting-free blocks on workdays to replicate this high-productivity weekend rhythm.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Maintain peak flow slots."
                }
              ]
            },
            ui: {
              mainResponse: "You logged 14.5 active hours. Coding occupied 5.0 hours (34.5%), running 1.0 hour (7%), personal time 4.0 hours (27.5%), and sleep 8.5 hours (59%). You met all intentions today.",
              insight: "Without collaborative meetings, you achieved a 100% flow block success rate, sustaining high focus (🔥) for a combined 5 hours.",
              suggestion: "Reserve meeting-free blocks on workdays to replicate this high-productivity weekend rhythm.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Maintain peak flow slots." }
              ]
            }
          },
          reflection_mirror: {
            json: {
              "answer": "Today recorded 5.0 hours of coding, 1.0 hour of running, 4.0 hours of personal time, and 8.5 hours of sleep.",
              "insight": "Focus was sustained for 5.0 hours. You exceeded your coding target by 1.0 hour and running target by 0.25 hours.",
              "suggestion": "Observation: Focus was stable, distraction was 0 hours.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Log of target vs actual."
                }
              ]
            },
            ui: {
              mainResponse: "Today recorded 5.0 hours of coding, 1.0 hour of running, 4.0 hours of personal time, and 8.5 hours of sleep.",
              insight: "Focus was sustained for 5.0 hours. You exceeded your coding target by 1.0 hour and running target by 0.25 hours.",
              suggestion: "Observation: Focus was stable, distraction was 0 hours.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Log of target vs actual." }
              ]
            }
          }
        },
        ai_plus: {
          narrator: {
            json: {
              "answer": "You slept 8.5 hours. You completed two coding blocks of 3.0 and 2.0 hours. You ran for 1.0 hour and spent 4 hours in personal time.",
              "insight": "A highly productive cycle with no distraction sessions and deep focus blocks throughout.",
              "suggestion": "1. Schedule complex tasks for Saturday morning.\n2. Keep evening running as a standard weekend transition.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Sustain coding target."
                }
              ]
            },
            ui: {
              mainResponse: "You slept 8.5 hours. You completed two coding blocks of 3.0 and 2.0 hours. You ran for 1.0 hour and spent 4 hours in personal time.",
              insight: "A highly productive cycle with no distraction sessions and deep focus blocks throughout.",
              suggestion: "1. Schedule complex tasks for Saturday morning.\n2. Keep evening running as a standard weekend transition.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Sustain coding target." }
              ]
            }
          },
          reflector: {
            json: {
              "answer": "Your day blended creative isolation (Coding: 5h) and recovery. The absence of meeting fatigue kept your mental energy high.",
              "insight": "Zero meetings (😤) kept your transition stress low, which eliminated your post-meeting distraction habits completely today.",
              "suggestion": "1. Protect mid-week blocks from meeting fragmentation.\n2. Leverage active movement to decompress after long focus windows.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Running",
                  "targetSeconds": 3600,
                  "period": 1,
                  "reason": "Decompress after focus sessions."
                }
              ]
            },
            ui: {
              mainResponse: "Your day blended creative isolation (Coding: 5h) and recovery. The absence of meeting fatigue kept your mental energy high.",
              insight: "Zero meetings (😤) kept your transition stress low, which eliminated your post-meeting distraction habits completely today.",
              suggestion: "1. Protect mid-week blocks from meeting fragmentation.\n2. Leverage active movement to decompress after long focus windows.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Running", target: "1h 0m / Daily", reason: "Decompress after focus sessions." }
              ]
            }
          },
          analyst: {
            json: {
              "answer": "You logged a highly focused 14.5-hour cycle. Focus was 5.0 hours (34.5%), fitness 1.0 hour (7%), personal recovery 8.5 hours.",
              "insight": "Zero distraction detected. High-focus periods (🔥) were sustained across two long cycles, validating the efficiency of meeting-free days.",
              "suggestion": "1. Batch all admin tasks to preserve focal integrity.\n2. Protect deep work slots by working asynchronously.\n3. Log personal downtime to consolidate mental recovery.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Maintain focus blocks."
                }
              ]
            },
            ui: {
              mainResponse: "You logged a highly focused 14.5-hour cycle. Focus was 5.0 hours (34.5%), fitness 1.0 hour (7%), personal recovery 8.5 hours.",
              insight: "Zero distraction detected. High-focus periods (🔥) were sustained across two long cycles, validating the efficiency of meeting-free days.",
              suggestion: "1. Batch all admin tasks to preserve focal integrity.\n2. Protect deep work slots by working asynchronously.\n3. Log personal downtime to consolidate mental recovery.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Maintain focus blocks." }
              ]
            }
          },
          reflection_mirror: {
            json: {
              "answer": "Today records: Coding (5.0 hours), Running (1.0 hour), Personal (4.0 hours), Sleep (8.5 hours). Distraction: 0 hours.",
              "insight": "Focus was maintained. Running followed coding, maintaining a motivated (🚀) state without meeting stressors.",
              "suggestion": "1. Target coding was 4.0h; actual was 5.0h.\n2. Target running was 0.75h; actual was 1.0h.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Track actual coding to target."
                }
              ]
            },
            ui: {
              mainResponse: "Today records: Coding (5.0 hours), Running (1.0 hour), Personal (4.0 hours), Sleep (8.5 hours). Distraction: 0 hours.",
              insight: "Focus was maintained. Running followed coding, maintaining a motivated (🚀) state without meeting stressors.",
              suggestion: "1. Target coding was 4.0h; actual was 5.0h.\n2. Target running was 0.75h; actual was 1.0h.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Track actual coding to target." }
              ]
            }
          },
          coach: {
            json: {
              "answer": "What a fantastic flow state today! You hit 5.0 hours of deep coding and logged a 1.0-hour run. Both targets were fully met, and you had zero distraction time.",
              "insight": "Your data shows that removing meeting friction leads to a 40% increase in coding focus. You thrive in continuous, uninterrupted blocks where you can get into the zone without scheduled interruptions.",
              "suggestion": "1. Block out a 'No Meeting Wednesday' to preserve deep developer focus.\n2. Keep your weekend run habit as it provides a perfect post-work mental decompression.\n3. Add a 'Reading Reset' of 15 minutes before bed.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 18000,
                  "period": 1,
                  "reason": "Leverage flow days to build momentum."
                },
                {
                  "modeKey": "personal",
                  "subTag": "Running",
                  "targetSeconds": 3600,
                  "period": 1,
                  "reason": "Maintain high cardiovascular baseline."
                }
              ]
            },
            ui: {
              mainResponse: "What a fantastic flow state today! You hit 5.0 hours of deep coding and logged a 1.0-hour run. Both targets were fully met, and you had zero distraction time.",
              insight: "Your data shows that removing meeting friction leads to a 40% increase in coding focus. You thrive in continuous, uninterrupted blocks where you can get into the zone without scheduled interruptions.",
              suggestion: "1. Block out a 'No Meeting Wednesday' to preserve deep developer focus.\n2. Keep your weekend run habit as it provides a perfect post-work mental decompression.\n3. Add a 'Reading Reset' of 15 minutes before bed.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "5h 0m / Daily", reason: "Leverage flow days to build momentum." },
                { modeKey: "personal", subTag: "Running", target: "1h 0m / Daily", reason: "Maintain high cardiovascular baseline." }
              ]
            }
          }
        }
      }
    },
    burnout: {
      name: "The Burnout Day",
      description: "A low-sleep day dominated by meeting fatigue and heavy distraction loops.",
      ddf: `[ACTIVITY_LOG]
@2026-06-01|Sleep:5.5h(😵)|Meetings:2.0h(😤)|Distraction:1.5h(😵)|Meetings:1.5h(😤)|Distraction:2.0h(😵)|Personal:1.0h(😤)

[TOTALS]
Sleep:5.5h (1 sessions)
Meetings:3.5h (2 sessions)
Distraction:3.5h (2 sessions)
Personal:1.0h (1 sessions)

[INTENTIONS]
work - Coding:0.0h/4.0h (MISS)
personal - Running:0.0h/0.5h (MISS)`,
      tiers: {
        guest: {
          narrator: {
            json: {
              "answer": "You slept for 5.5 hours. Your day consisted of 2.0 hours of meetings, 1.5 hours of distraction, another 1.5 hours of meetings, 2.0 hours of distraction, and 1.0 hour of personal time.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Based on daily target."
                }
              ]
            },
            ui: {
              mainResponse: "You slept for 5.5 hours. Your day consisted of 2.0 hours of meetings, 1.5 hours of distraction, another 1.5 hours of meetings, 2.0 hours of distraction, and 1.0 hour of personal time.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Based on daily target." }
              ]
            }
          }
        },
        free: {
          narrator: {
            json: {
              "answer": "You started the day exhausted with only 5.5 hours of sleep (😵). You went through 2.0 hours of stressful meetings (😤) followed by a distracted (😵) 1.5-hour gap. You had another stressful (😤) 1.5-hour meeting, fell into distraction (😵) for 2.0 hours, and ended the day stressed (😤) with 1.0 hour of personal time.",
              "suggestedIntentions": [
                {
                  "modeKey": "work",
                  "subTag": "Coding",
                  "targetSeconds": 14400,
                  "period": 1,
                  "reason": "Try to rebuild focus slots."
                }
              ]
            },
            ui: {
              mainResponse: "You started the day exhausted with only 5.5 hours of sleep (😵). You went through 2.0 hours of stressful meetings (😤) followed by a distracted (😵) 1.5-hour gap. You had another stressful (😤) 1.5-hour meeting, fell into distraction (😵) for 2.0 hours, and ended the day stressed (😤) with 1.0 hour of personal time.",
              suggestedIntentions: [
                { modeKey: "work", subTag: "Coding", target: "4h 0m / Daily", reason: "Try to rebuild focus slots." }
              ]
            }
          },
          reflector: {
            json: {
              "answer": "Your day was dominated by meetings and heavy cognitive overload. Waking up exhausted, the constant meeting demands triggered major stress and substantial distraction blocks, leaving you with little energy for personal recovery or focused creation.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Rest",
                  "targetSeconds": 28800,
                  "period": 1,
                  "reason": "Prioritize sleep recovery."
                }
              ]
            },
            ui: {
              mainResponse: "Your day was dominated by meetings and heavy cognitive overload. Waking up exhausted, the constant meeting demands triggered major stress and substantial distraction blocks, leaving you with little energy for personal recovery or focused creation.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Rest", target: "8h 0m / Daily", reason: "Prioritize sleep recovery." }
              ]
            }
          }
        },
        pro: {
          narrator: {
            json: {
              "answer": "You slept 5.5 hours. The day recorded 3.5 hours of meetings, 3.5 hours of distraction, and 1.0 hour of personal time. No coding or running was logged.",
              "insight": "Exhaustion and constant meetings prevented any deep work from occurring today.",
              "suggestion": "Avoid scheduling meetings on days following less than 6 hours of sleep.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Sleep",
                  "targetSeconds": 28800,
                  "period": 1,
                  "reason": "Re-establish sleep baseline."
                }
              ]
            },
            ui: {
              mainResponse: "You slept 5.5 hours. The day recorded 3.5 hours of meetings, 3.5 hours of distraction, and 1.0 hour of personal time. No coding or running was logged.",
              insight: "Exhaustion and constant meetings prevented any deep work from occurring today.",
              suggestion: "Avoid scheduling meetings on days following less than 6 hours of sleep.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Sleep", target: "8h 0m / Daily", reason: "Re-establish sleep baseline." }
              ]
            }
          },
          reflector: {
            json: {
              "answer": "You experienced high frustration and mental depletion. Meetings dominated your calendar and triggered distraction blocks as a coping mechanism for exhaustion.",
              "insight": "The 3.5 hours of distraction (😵) were an unconscious retreat from back-to-back meeting stress (😤) while operating on low rest.",
              "suggestion": "Introduce short walking gaps to de-escalate tension after long syncs.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Rest",
                  "targetSeconds": 28800,
                  "period": 1,
                  "reason": "Nervous system recovery."
                }
              ]
            },
            ui: {
              mainResponse: "You experienced high frustration and mental depletion. Meetings dominated your calendar and triggered distraction blocks as a coping mechanism for exhaustion.",
              insight: "The 3.5 hours of distraction (😵) were an unconscious retreat from back-to-back meeting stress (😤) while operating on low rest.",
              suggestion: "Introduce short walking gaps to de-escalate tension after long syncs.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Rest", target: "8h 0m / Daily", reason: "Nervous system recovery." }
              ]
            }
          },
          analyst: {
            json: {
              "answer": "You logged 8.0 tracked hours. Meetings took 3.5 hours (44%), distraction took 3.5 hours (44%), personal time took 1.0 hour (12%), sleep was 5.5 hours. Zero hours of coding were logged today.",
              "insight": "Shorter sleep (5.5h) coupled with high meeting volume (3.5h) resulted in a complete focus collapse, with distraction hours matching meeting hours 1:1.",
              "suggestion": "Limit maximum meeting time to 1.5 hours per day to prevent complete focus depletion.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Sleep",
                  "targetSeconds": 27000,
                  "period": 1,
                  "reason": "Re-establish sleep baseline."
                }
              ]
            },
            ui: {
              mainResponse: "You logged 8.0 tracked hours. Meetings took 3.5 hours (44%), distraction took 3.5 hours (44%), personal time took 1.0 hour (12%), sleep was 5.5 hours. Zero hours of coding were logged today.",
              insight: "Shorter sleep (5.5h) coupled with high meeting volume (3.5h) resulted in a complete focus collapse, with distraction hours matching meeting hours 1:1.",
              suggestion: "Limit maximum meeting time to 1.5 hours per day to prevent complete focus depletion.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Sleep", target: "7h 30m / Daily", reason: "Re-establish sleep baseline." }
              ]
            }
          },
          reflection_mirror: {
            json: {
              "answer": "Today records: Meetings (3.5 hours), Distraction (3.5 hours), Sleep (5.5 hours), Personal (1.0 hour). Coding and running: 0 hours.",
              "insight": "Rest baseline was missed by 2.0 hours. Focus did not initiate. Meetings preceded distraction blocks.",
              "suggestion": "Observation: You missed all active productivity and fitness targets.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Sleep",
                  "targetSeconds": 28800,
                  "period": 1,
                  "reason": "Recover sleep debt."
                }
              ]
            },
            ui: {
              mainResponse: "Today records: Meetings (3.5 hours), Distraction (3.5 hours), Sleep (5.5 hours), Personal (1.0 hour). Coding and running: 0 hours.",
              insight: "Rest baseline was missed by 2.0 hours. Focus did not initiate. Meetings preceded distraction blocks.",
              suggestion: "Observation: You missed all active productivity and fitness targets.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Sleep", target: "8h 0m / Daily", reason: "Recover sleep debt." }
              ]
            }
          }
        },
        ai_plus: {
          narrator: {
            json: {
              "answer": "You slept 5.5 hours. You had 3.5 hours of meetings, 3.5 hours of distraction, and 1 hour of personal time. You missed your coding and fitness targets.",
              "insight": "Exhaustion from short sleep left you with low focus capacity, leading to distraction loops post-meetings.",
              "suggestion": "1. Prioritize early sleep tonight.\n2. Delay deep work sessions to focus on low-cognitive recovery.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Sleep",
                  "targetSeconds": 28800,
                  "period": 1,
                  "reason": "Recover baseline sleep energy."
                }
              ]
            },
            ui: {
              mainResponse: "You slept 5.5 hours. You had 3.5 hours of meetings, 3.5 hours of distraction, and 1 hour of personal time. You missed your coding and fitness targets.",
              insight: "Exhaustion from short sleep left you with low focus capacity, leading to distraction loops post-meetings.",
              suggestion: "1. Prioritize early sleep tonight.\n2. Delay deep work sessions to focus on low-cognitive recovery.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Sleep", target: "8h 0m / Daily", reason: "Recover baseline sleep energy." }
              ]
            }
          },
          reflector: {
            json: {
              "answer": "A draining day showing fatigue. Back-to-back meetings exhausted your focus reserves, prompting you to seek escape in distraction blocks.",
              "insight": "Your sleep debt (5.5h) created emotional vulnerability. Meetings were perceived as stressful (😤), leading you to seek recovery in distraction (😵).",
              "suggestion": "1. Reset your nervous system with short meditation steps post-meetings.\n2. Shift focus targets to recovery rather than production.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Rest",
                  "targetSeconds": 28800,
                  "period": 1,
                  "reason": "Nervous system recovery."
                }
              ]
            },
            ui: {
              mainResponse: "A draining day showing fatigue. Back-to-back meetings exhausted your focus reserves, prompting you to seek escape in distraction blocks.",
              insight: "Your sleep debt (5.5h) created emotional vulnerability. Meetings were perceived as stressful (😤), leading you to seek recovery in distraction (😵).",
              suggestion: "1. Reset your nervous system with short meditation steps post-meetings.\n2. Shift focus targets to recovery rather than production.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Rest", target: "8h 0m / Daily", reason: "Nervous system recovery." }
              ]
            }
          },
          analyst: {
            json: {
              "answer": "You logged 8.0 tracked hours. Meetings took 3.5 hours (44%), distraction took 3.5 hours (44%), personal time took 1.0 hour (12%), sleep was 5.5 hours. Zero hours of coding were logged today.",
              "insight": "Shorter sleep (5.5h) coupled with high meeting volume (3.5h) resulted in a complete focus collapse, with distraction hours matching meeting hours 1:1.",
              "suggestion": "1. Limit maximum meeting time to 1.5 hours per day to prevent complete focus depletion.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Sleep",
                  "targetSeconds": 27000,
                  "period": 1,
                  "reason": "Re-establish sleep baseline."
                }
              ]
            },
            ui: {
              mainResponse: "You logged 8.0 tracked hours. Meetings took 3.5 hours (44%), distraction took 3.5 hours (44%), personal time took 1.0 hour (12%), sleep was 5.5 hours. Zero hours of coding were logged today.",
              insight: "Shorter sleep (5.5h) coupled with high meeting volume (3.5h) resulted in a complete focus collapse, with distraction hours matching meeting hours 1:1.",
              suggestion: "1. Limit maximum meeting time to 1.5 hours per day to prevent complete focus depletion.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Sleep", target: "7h 30m / Daily", reason: "Re-establish sleep baseline." }
              ]
            }
          },
          reflection_mirror: {
            json: {
              "answer": "Today records: Meetings (3.5 hours), Distraction (3.5 hours), Sleep (5.5 hours), Personal (1.0 hour). Coding and running: 0 hours.",
              "insight": "Rest baseline was missed by 2.0 hours. Focus did not initiate. Meetings preceded distraction blocks.",
              "suggestion": "Observation: You missed all active productivity and fitness targets.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Sleep",
                  "targetSeconds": 28800,
                  "period": 1,
                  "reason": "Recover sleep debt."
                }
              ]
            },
            ui: {
              mainResponse: "Today records: Meetings (3.5 hours), Distraction (3.5 hours), Sleep (5.5 hours), Personal (1.0 hour). Coding and running: 0 hours.",
              insight: "Rest baseline was missed by 2.0 hours. Focus did not initiate. Meetings preceded distraction blocks.",
              suggestion: "Observation: You missed all active productivity and fitness targets.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Sleep", target: "8h 0m / Daily", reason: "Recover sleep debt." }
              ]
            }
          },
          coach: {
            json: {
              "answer": "Today was rough. You had 3.5 hours of stressful meetings and 3.5 hours of distraction. You logged zero coding hours and missed all your core focus and running intentions.",
              "insight": "Your data highlights a burnout pattern: sleep deprivation (5.5h) breaks your willpower, making you highly vulnerable to meeting fatigue. When meetings exceed 2 hours on a low-sleep day, you completely abandon your work intentions and enter a passive distraction coping cycle.",
              "suggestion": "1. Enforce a hard stop on meetings if you sleep less than 6 hours the previous night.\n2. Decline non-essential meetings to keep daily syncs under 1.5 hours.\n3. Take a 15-minute quiet walk outside after your first morning meeting to reset your focus before distraction takes over.",
              "suggestedIntentions": [
                {
                  "modeKey": "personal",
                  "subTag": "Sleep Recovery",
                  "targetSeconds": 28800,
                  "period": 1,
                  "reason": "Recharge your nervous system immediately."
                },
                {
                  "modeKey": "personal",
                  "subTag": "Walk Reset",
                  "targetSeconds": 900,
                  "period": 1,
                  "reason": "Nervous system reset between high-stress blocks."
                }
              ]
            },
            ui: {
              mainResponse: "Today was rough. You had 3.5 hours of stressful meetings and 3.5 hours of distraction. You logged zero coding hours and missed all your core focus and running intentions.",
              insight: "Your data highlights a burnout pattern: sleep deprivation (5.5h) breaks your willpower, making you highly vulnerable to meeting fatigue. When meetings exceed 2 hours on a low-sleep day, you completely abandon your work intentions and enter a passive distraction coping cycle.",
              suggestion: "1. Enforce a hard stop on meetings if you sleep less than 6 hours the previous night.\n2. Decline non-essential meetings to keep daily syncs under 1.5 hours.\n3. Take a 15-minute quiet walk outside after your first morning meeting to reset your focus before distraction takes over.",
              suggestedIntentions: [
                { modeKey: "personal", subTag: "Sleep Recovery", target: "8h 0m / Daily", reason: "Recharge your nervous system immediately." },
                { modeKey: "personal", subTag: "Walk Reset", target: "15m / Daily", reason: "Nervous system reset between high-stress blocks." }
              ]
            }
          }
        }
      }
    }
  },
  tierRules: {
    guest: {
      name: "Guest Tier",
      description: "Basic log translation, no advanced AI elements.",
      allowedProfiles: ["narrator"],
      features: { insight: false, suggestion: false, pattern: false }
    },
    free: {
      name: "Free Tier",
      description: "Baseline reflection + emoji reaction parsing.",
      allowedProfiles: ["narrator", "reflector"],
      features: { insight: false, suggestion: false, pattern: false }
    },
    pro: {
      name: "Pro Tier",
      description: "Trend logs + subconscious patterns + 1 action suggestion.",
      allowedProfiles: ["narrator", "reflector", "analyst", "reflection_mirror"],
      features: { insight: true, suggestion: true, pattern: true }
    },
    ai_plus: {
      name: "AI+ Tier",
      description: "Deep coaching + multiple habits + smart suggestions.",
      allowedProfiles: ["narrator", "reflector", "analyst", "reflection_mirror", "coach"],
      features: { insight: true, suggestion: true, pattern: true }
    }
  }
};

// UI State Manager
let currentPreset = "friction";
let currentTier = "ai_plus";
let currentProfile = "coach";
let currentViewMode = "ui";

document.addEventListener("DOMContentLoaded", () => {
  // Simulator DOM bindings
  const presetBtns = document.querySelectorAll(".sim-preset-btn");
  const tierBtns = document.querySelectorAll(".sim-tier-btn");
  const profileBtns = document.querySelectorAll(".sim-profile-btn");
  const viewToggleBtns = document.querySelectorAll(".sim-view-btn");
  
  const ddfContent = document.getElementById("sim-ddf-content");
  const ddfCollapseBtn = document.getElementById("sim-ddf-collapse-btn");
  const ddfCollapseContainer = document.getElementById("sim-ddf-collapse-container");
  const ddfCollapseIcon = document.getElementById("sim-ddf-collapse-icon");

  const phoneScreen = document.getElementById("sim-phone-screen");
  
  const mainResponseEl = document.getElementById("sim-ui-main-response");
  const insightContainer = document.getElementById("sim-ui-insight-container");
  const insightTextEl = document.getElementById("sim-ui-insight-text");
  const suggestionContainer = document.getElementById("sim-ui-suggestion-container");
  const suggestionTextEl = document.getElementById("sim-ui-suggestion-text");
  const intentionsContainer = document.getElementById("sim-ui-intentions-container");

  const jsonViewContainer = document.getElementById("sim-json-view-container");
  const jsonContentEl = document.getElementById("sim-json-content");

  // Journey markers
  const journeyInsightMarker = document.getElementById("sim-journey-insight");
  const journeyActionMarker = document.getElementById("sim-journey-action");

  // Collapsible raw timeline log toggle
  if (ddfCollapseBtn) {
    ddfCollapseBtn.addEventListener("click", () => {
      const isExpanded = ddfCollapseContainer.classList.contains("expanded");
      if (!isExpanded) {
        ddfCollapseContainer.classList.add("expanded", "p-4");
        ddfCollapseContainer.classList.remove("pointer-events-none");
        ddfCollapseIcon.style.transform = "rotate(180deg)";
        ddfCollapseBtn.querySelector(".btn-text").textContent = "Hide Raw Activity Log";
      } else {
        ddfCollapseContainer.classList.remove("expanded", "p-4");
        ddfCollapseContainer.classList.add("pointer-events-none");
        ddfCollapseIcon.style.transform = "rotate(0deg)";
        ddfCollapseBtn.querySelector(".btn-text").textContent = "Show Raw Activity Log";
      }
    });
  }

  // Bind Preset selections
  presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentPreset = btn.getAttribute("data-preset");
      presetBtns.forEach(b => b.classList.remove("active", "bg-white", "text-black", "border-white"));
      presetBtns.forEach(b => b.classList.add("bg-white/5", "text-slate-400", "border-white/10"));
      btn.classList.add("active", "bg-white", "text-black", "border-white");
      btn.classList.remove("bg-white/5", "text-slate-400", "border-white/10");
      
      updateSimulatorUI(true);
    });
  });

  // Bind Tier selections
  tierBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentTier = btn.getAttribute("data-tier");
      tierBtns.forEach(b => b.classList.remove("active", "border-accent", "bg-accent/10", "text-white"));
      tierBtns.forEach(b => b.classList.add("border-white/5", "bg-white/2", "text-slate-400"));
      btn.classList.add("active", "border-accent", "bg-accent/10", "text-white");
      btn.classList.remove("border-white/5", "bg-white/2", "text-slate-400");
      
      // Update capabilities view & adjust profiles
      const allowed = SIMULATOR_DATA.tierRules[currentTier].allowedProfiles;
      
      // If current profile is not allowed under the new tier, switch to the first allowed one
      if (!allowed.includes(currentProfile)) {
        currentProfile = allowed[allowed.length - 1]; // Select the highest profile
      }
      
      updateSimulatorUI(true);
    });
  });

  // Bind Profile selections
  profileBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const prof = btn.getAttribute("data-profile");
      const allowed = SIMULATOR_DATA.tierRules[currentTier].allowedProfiles;
      if (!allowed.includes(prof)) return; // Disabled

      currentProfile = prof;
      updateSimulatorUI(true);
    });
  });

  // Bind View Mode (UI vs JSON)
  viewToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentViewMode = btn.getAttribute("data-view");
      viewToggleBtns.forEach(b => b.classList.remove("bg-white/10", "text-white"));
      viewToggleBtns.forEach(b => b.classList.add("text-slate-400"));
      btn.classList.add("bg-white/10", "text-white");
      btn.classList.remove("text-slate-400");

      if (currentViewMode === "ui") {
        jsonViewContainer.classList.add("hidden");
        document.getElementById("sim-ui-view-container").classList.remove("hidden");
      } else {
        document.getElementById("sim-ui-view-container").classList.add("hidden");
        jsonViewContainer.classList.remove("hidden");
      }
    });
  });

  // Main UI update engine
  function updateSimulatorUI(animate = false) {
    const preset = SIMULATOR_DATA.presets[currentPreset];
    const rules = SIMULATOR_DATA.tierRules[currentTier];
    const response = preset.tiers[currentTier][currentProfile];

    // Update raw input text
    if (ddfContent) {
      ddfContent.textContent = preset.ddf;
    }

    // Update profile button statuses (enable/disable based on Tier rules)
    profileBtns.forEach(btn => {
      const p = btn.getAttribute("data-profile");
      const isAllowed = rules.allowedProfiles.includes(p);
      
      if (isAllowed) {
        btn.classList.remove("opacity-30", "cursor-not-allowed", "bg-transparent");
        btn.removeAttribute("disabled");
        if (p === currentProfile) {
          btn.classList.add("border-secondary", "bg-secondary/15", "text-white");
          btn.classList.remove("border-white/5", "text-slate-400");
        } else {
          btn.classList.remove("border-secondary", "bg-secondary/15", "text-white");
          btn.classList.add("border-white/5", "text-slate-400");
        }
      } else {
        btn.classList.add("opacity-30", "cursor-not-allowed");
        btn.classList.remove("border-secondary", "bg-secondary/15", "text-white");
        btn.classList.add("border-white/5", "text-slate-400");
        btn.setAttribute("disabled", "true");
      }
    });

    // Update Tier Capability indicators in control panel
    updateTierIndicators(rules);

    // Update simulated mobile phone contents (UI or JSON)
    if (response) {
      // 1. JSON contents
      if (jsonContentEl) {
        jsonContentEl.textContent = JSON.stringify(response.json, null, 2);
      }

      // 2. UI contents
      if (mainResponseEl) mainResponseEl.textContent = `"${response.ui.mainResponse}"`;
      
      // Insight Block
      if (rules.features.insight && response.ui.insight) {
        insightTextEl.textContent = response.ui.insight;
        insightContainer.classList.remove("hidden");
        // Light up journey indicator
        journeyInsightMarker.classList.add("active", "border-accent", "text-accent-light");
        journeyInsightMarker.classList.remove("border-white/10", "text-slate-600");
      } else {
        insightContainer.classList.add("hidden");
        // Dim journey indicator
        journeyInsightMarker.classList.remove("active", "border-accent", "text-accent-light");
        journeyInsightMarker.classList.add("border-white/10", "text-slate-600");
      }

      // Suggestion Block
      if (rules.features.suggestion && response.ui.suggestion) {
        // Parse multi-line suggestions
        const sugLines = response.ui.suggestion.split('\n');
        if (sugLines.length > 1) {
          suggestionTextEl.innerHTML = `<ol class="list-decimal pl-4 space-y-1">${sugLines.map(line => `<li>${line.replace(/^\d+\.\s*/, '')}</li>`).join('')}</ol>`;
        } else {
          suggestionTextEl.textContent = response.ui.suggestion;
        }
        suggestionContainer.classList.remove("hidden");
      } else {
        suggestionContainer.classList.add("hidden");
      }

      // Actions/Intentions Block
      if (intentionsContainer) {
        intentionsContainer.innerHTML = "";
        response.ui.suggestedIntentions.forEach(intent => {
          const modeIcon = intent.modeKey === "work" ? "💼" : "🧘";
          const card = document.createElement("div");
          card.className = "p-4 rounded-xl border border-white/10 bg-white/2 hover:bg-white/5 transition-colors flex flex-col gap-2";
          card.innerHTML = `
            <div class="flex justify-between items-center">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <span>${modeIcon}</span> ${intent.modeKey} → ${intent.subTag}
              </span>
              <span class="text-xs bg-white/5 px-2.5 py-0.5 rounded-full font-semibold text-slate-300 border border-white/5">${intent.target}</span>
            </div>
            <p class="text-xs text-slate-300 italic font-medium leading-relaxed">"${intent.reason}"</p>
            <button class="mt-2 w-full py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all shadow-[0_0_10px_rgba(16,185,129,0.05)] cursor-pointer hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] active:scale-98 flex items-center justify-center gap-1.5" onclick="alert('Intention added to your LifeMirror tracker!')">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              Add Intention
            </button>
          `;
          intentionsContainer.appendChild(card);
        });

        // Action Journey indicator (always active since there is action, but brighter for Pro/AI+)
        if (rules.features.suggestion) {
          journeyActionMarker.classList.add("active", "border-emerald-500", "text-emerald-400");
          journeyActionMarker.classList.remove("border-white/10", "text-slate-600");
        } else {
          journeyActionMarker.classList.remove("active", "border-emerald-500", "text-emerald-400");
          journeyActionMarker.classList.add("border-white/10", "text-slate-600");
        }
      }
    }

    // Run GSAP transitions if requested
    if (animate && window.gsap) {
      gsap.fromTo(phoneScreen, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );
    }
  }

  // Update Capability Badges in control panel
  function updateTierIndicators(rules) {
    const list = document.getElementById("sim-capabilities-indicator-list");
    if (!list) return;

    list.innerHTML = "";
    
    // Create badges reflecting value progression
    const features = [
      { label: "Reflections", status: true, detail: "Core timeline" },
      { label: "Emojis", status: currentTier !== "guest", detail: "Emotion parsing" },
      { label: "Patterns", status: rules.features.pattern, detail: "Behavior links" },
      { label: "Smart Coach", status: currentTier === "ai_plus", detail: "Smart advice" }
    ];

    features.forEach(f => {
      const activeClass = f.status ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : "text-slate-600 bg-white/2 border-white/5 opacity-40";
      const icon = f.status ? "✓" : "✗";
      list.innerHTML += `
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold ${activeClass}">
          <span>${icon}</span>
          <span>${f.label}</span>
          <span class="text-[9px] font-normal opacity-60 ml-0.5">${f.detail}</span>
        </div>
      `;
    });
  }

  // Run initial state update
  updateSimulatorUI(false);
});
