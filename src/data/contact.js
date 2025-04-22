import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  // Allow empty string during typing
  return re.test(text) || text.length === 0;
};

// --- Updated messages structure ---
const messages = [
  { local: 'muczynskik', domain: 'gmail.com' },
  { local: 'hello', domain: 'gmail.com' },
  { local: 'hello', domain: 'muczynski.info' }, // Added new email details
];
// ---------------------------------

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // Set up the interval.
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) { // Check if delay is not null to run interval
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]); // Line 36: Added semicolon
};

const EmailLink = ({ loopMessage }) => {
  const hold = 50; // Increased hold time for better readability
  const delay = 100; // Slightly slower typing speed

  const [idx, updateIter] = useState(0); // points to current message object
  const [typedLocalPart, updateTypedLocalPart] = useState(''); // The currently typed local part
  const [currentDomain, setCurrentDomain] = useState(messages[0].domain);
  const [char, updateChar] = useState(0); // points to current char in the local part
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      const currentMessageObj = messages[idx]; // Get the current message object
      let newIdx = idx;
      let newChar = char;

      // Check if current message typing is complete (including hold time)
      if (char >= currentMessageObj.local.length + hold) {
        newIdx += 1;
        newChar = 0;
      }

      // Check if we've reached the end of the messages array
      if (newIdx === messages.length) {
        if (loopMessage) {
          updateIter(0);
          updateChar(0);
          updateTypedLocalPart(''); // Reset typed part
          setCurrentDomain(messages[0].domain); // Reset domain to the first one
        } else {
          setIsActive(false); // Stop the interval
        }
      // --- Refactored to avoid lonely-if and fix brace-style/indentation ---
      } else if (newIdx !== idx) { // If the index changed... (Line 76 fixed: no-lonely-if)
        // Update the index, reset char count, clear typed part, set new domain
        updateIter(newIdx);
        updateChar(0); // Reset char count for the new message
        updateTypedLocalPart(''); // Start typing the new message
        setCurrentDomain(messages[newIdx].domain); // Update to the new domain
      } else if (char < currentMessageObj.local.length) { // Continue typing current message
        // Only type up to the length of the local part
        updateTypedLocalPart(currentMessageObj.local.slice(0, char + 1));
        updateChar(newChar + 1);
      } else { // We are in the 'hold' period after typing
        // Just increment char counter without updating text
        updateChar(newChar + 1);
      }
      // --- End of refactoring ---
    },
    isActive ? delay : null, // Pass null delay to stop the interval via useInterval hook
  );

  const isValid = validateText(typedLocalPart);
  // Only create a valid mailto link if the local part is non-empty and valid
  const canBeValidLink = isValid && typedLocalPart.length > 0;
  const fullEmail = `${typedLocalPart}@${currentDomain}`;

  return (
    <div
      className="inline-container"
      // Style invalid state only if the typed part is non-empty and invalid
      style={typedLocalPart.length > 0 && !isValid ? { color: 'red' } : {}}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => {
        // Only resume if looping is enabled OR if we haven't finished the sequence
        if (loopMessage || idx < messages.length) {
          // Check specifically if we are paused at the very end without looping
          // (This logic seems complex, ensure it covers all intended pause/resume cases)
           if (!(!loopMessage && idx === messages.length && char === 0)) {
             setIsActive(true);
           }
        }
      }}
    >
      {/* Line 116: Added '#' for href when invalid/empty to satisfy jsx-a11y/anchor-is-valid */}
      {/* You might also need onClick={(e) => { if (!canBeValidLink) e.preventDefault(); }} */}
      {/* depending on how strictly you want to prevent navigation/focus */}
      <a href={canBeValidLink ? `mailto:${fullEmail}` : '#'}>
        <span>{typedLocalPart}</span>
        {/* Domain part is now dynamic */}
        <span>@{currentDomain}</span>
      </a>
    </div>
  );
};

EmailLink.defaultProps = {
  loopMessage: false,
};

EmailLink.propTypes = {
  loopMessage: PropTypes.bool,
};

export default EmailLink;

// Line 133: Added final newline (ensure your editor saves this)