type EventType = 'click' | 'scroll' | 'mousemove';

type excludeEvent = Exclude<EventType, 'scroll'>; // only click and mousemove

const handleEvent = (event: excludeEvent) => {
    console.log(`you clicked: ${event}`)
}

handleEvent('click') // will work
handleEvent('mousemove') // will work

handleEvent('scroll') // will not work