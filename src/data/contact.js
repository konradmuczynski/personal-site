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
  }, [delay]);
};

const EmailLink = ({ loopMessage }) => {
  const hold = 50; // Increased hold time for better readability
  const delay = 100; // Slightly slower typing speed

  const [idx, updateIter] = useState(0); // points to current message object
  const [typedLocalPart, updateTypedLocalPart] = useState(''); // The currently typed local part
  // --- Added state for current domain ---
  const [currentDomain, setCurrentDomain] = useState(messages[0].domain);
  // --------------------------------------
  const [char, updateChar] = useState(0); // points to current char in the local part
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      const currentMessageObj = messages[idx]; // Get the current message object

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
      } else {
        // If the index changed, update the domain and reset typed part
        if (newIdx !== idx) {
          updateIter(newIdx);
          updateChar(0);
          updateTypedLocalPart(''); // Start typing the new message
          setCurrentDomain(messages[newIdx].domain); // Update to the new domain
        }
        // Otherwise, or after index update, continue typing the local part
        else if (char < currentMessageObj.local.length) {
           // Only type up to the length of the local part
            updateTypedLocalPart(currentMessageObj.local.slice(0, char + 1));
            updateChar(newChar + 1);
        } else {
            // We are in the 'hold' period, just increment char counter
            updateChar(newChar + 1);
        }
      }
    },
    isActive ? delay : null, // Pass null delay to stop the interval via useInterval hook
  );

  const isValid = validateText(typedLocalPart);
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
           if (!(!loopMessage && idx === messages.length && char === 0)) {
             setIsActive(true);
           }
        }
      }}
    >
      {/* Link generation updated */}
      <a href={isValid && typedLocalPart.length > 0 ? `mailto:${fullEmail}` : undefined}>
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