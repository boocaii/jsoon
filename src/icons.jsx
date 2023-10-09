function IconParkSolidBack(props) {
    const color = props?.disabled ? '#333' : '#fff';
    return (
        <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
            <mask id="ipSBack0">
                <path fill={color} fillRule="evenodd" stroke={color} strokeLinejoin="round" strokeWidth="4" d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path>
            </mask>
            <path fill="#000000" d="M0 0h48v48H0z" mask="url(#ipSBack0)"></path>
        </svg>
    )
}

function IconParkSolidForward(props) {
    const color = props?.disabled ? '#333' : '#fff';
    return (
        <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
            <mask id="ipSNext0">
                <path fill={color} fillRule="evenodd" stroke={color} strokeLinejoin="round" strokeWidth="4" d="M4 40.836c4.893-5.973 9.238-9.362 13.036-10.168c3.797-.805 7.412-.927 10.846-.365V41L44 23.545L27.882 7v10.167c-6.349.05-11.746 2.328-16.192 6.833C7.245 28.505 4.681 34.117 4 40.836Z" clipRule="evenodd"></path>
            </mask>
            <path fill="#000000" d="M0 0h48v48H0z" mask="url(#ipSNext0)"></path>
        </svg>
    )
}

function IconParkSolidDeleteFive(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
            <mask id="ipSDeleteFive0">
                <g fill="none" strokeLinejoin="round" strokeWidth="4">
                    <path stroke="#fff" strokeLinecap="round" d="M8 11h32M18 5h12"></path>
                    <path fill="#fff" stroke="#fff" d="M12 17h24v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V17Z"></path>
                    <path stroke="#000" strokeLinecap="round" d="m20 25l8 8m0-8l-8 8"></path>
                </g>
            </mask>
            <path fill="#000000" d="M0 0h48v48H0z" mask="url(#ipSDeleteFive0)"></path>
        </svg>
    )
}

function IconParkSolidCuttingOne(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
            <mask id="ipSCuttingOne0">
                <g fill="none" stroke="#fff" strokeWidth="4">
                    <path fill="#fff" strokeLinejoin="round" d="M11 42a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm26 0a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></path>
                    <path strokeLinecap="round" d="m15.377 39.413l2.123-3.597l17-29.445"></path>
                    <path strokeLinecap="round" d="m13.496 6.175l17 29.445l2.13 3.793"></path>
                </g>
            </mask>
            <path fill="#000000" d="M0 0h48v48H0z" mask="url(#ipSCuttingOne0)"></path>
        </svg>
    )
}

function IconParkSolidCopyOne(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
            <mask id="ipSCopyOne0">
                <g fill="none" strokeLinecap="round" strokeWidth="4">
                    <path fill="#fff" stroke="#fff" strokeLinejoin="round" d="M13 38h28V16H30V4H13v34Z"></path>
                    <path stroke="#fff" strokeLinejoin="round" d="m30 4l11 12M7 20v24h21"></path>
                    <path stroke="#000" d="M19 20h4m-4 8h12"></path>
                </g>
            </mask>
            <path fill="#000000" d="M0 0h48v48H0z" mask="url(#ipSCopyOne0)"></path>
        </svg>
    )
}


export {
    IconParkSolidBack, 
    IconParkSolidForward, 
    IconParkSolidCuttingOne, 
    IconParkSolidCopyOne, 
    IconParkSolidDeleteFive,
}