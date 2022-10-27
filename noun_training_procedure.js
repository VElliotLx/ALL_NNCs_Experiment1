function make_noun_training(meanings,words,images) {
    /* noun training trials */
    // 5x each noun = 10 trials
    noun_training_trials = []
    for (var reps = 0; reps < 5; reps++) {
        for (var i = 0; i < meanings.length; i++) {
            noun_training_trials.push(
                {   meaning: meanings[i],
                    image: images[i],
                    word: words[i]
                }
            )
        }
    }
    /* noun training procedure */
    var noun_training = {
        timeline: [
            // show image and word
            {
                type: 'image-button-response',
                stimulus: jsPsych.timelineVariable('image'),
                prompt: jsPsych.timelineVariable('word'),
                choices: ['Next'],
                button_hide: true,
                trial_duration: 2000
            },
            // show image and word and next button
            {
                type: 'image-button-response',
                stimulus: jsPsych.timelineVariable('image'),
                prompt: jsPsych.timelineVariable('word'),
                choices: ['Next']
            }
        ],
        timeline_variables: noun_training_trials,
        randomize_order: true,
        repetitions: 1
    };
    return noun_training;
}