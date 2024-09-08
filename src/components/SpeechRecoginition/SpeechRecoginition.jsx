import React from 'react'
import { useState, useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { SpeechRecognitionProvider } from 'react-speech-recognition';

import {IconMicrophone} from '@tabler/icons-react'

const SpeechRecognitionComponent = ({setSourceText}) => {
    const {transcript, listening} = useSpeechRecognition()

    useEffect(() => {
        setSourceText(transcript)
    },[transcript, setSourceText])

    const handleVoiceRecordings = () => {
        if(listening){
            SpeechRecognition.stopListening()
        }
        else{
            SpeechRecognition.startListening()
        }
    }
    return (
        <div>
            <IconMicrophone
                size={22}
                className='text-gray-400'
                onClick={handleVoiceRecordings}
            />
        </div>

    )

}
export default SpeechRecognitionComponent;
