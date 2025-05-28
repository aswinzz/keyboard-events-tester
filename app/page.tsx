'use client';

import { useState, useEffect } from 'react';
import { Keyboard } from 'lucide-react';

interface KeyEvent {
  key: string;
  code: string;
  keyCode: number;
  which: number;
  altKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
  timestamp: number;
}

interface KeyHistoryItem {
  key: string;
  code: string;
  timestamp: string;
}

export default function Home() {
  const [currentEvent, setCurrentEvent] = useState<KeyEvent | null>(null);
  const [keyHistory, setKeyHistory] = useState<KeyHistoryItem[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      // Prevent default behavior for certain keys to avoid unwanted actions
      if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
        // Allow refresh
        return;
      }
      
      event.preventDefault();
      
      const keyEventData: KeyEvent = {
        key: event.key,
        code: event.code,
        keyCode: event.keyCode,
        which: event.which,
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        metaKey: event.metaKey,
        timestamp: Date.now(),
      };

      // Format key combination for console logging
      const formatCurrentKeyCombination = () => {
        const modifiers = [];
        if (event.ctrlKey) modifiers.push('Ctrl');
        if (event.altKey) modifiers.push('Alt');
        if (event.shiftKey) modifiers.push('Shift');
        if (event.metaKey) modifiers.push('Meta');
        
        const key = event.key;
        return modifiers.length > 0 ? `${modifiers.join(' + ')} + ${key}` : key;
      };

      // Log to console for developers
      console.group(`🎹 Keyboard Event: ${event.key}`);
      console.log('Event Object:', event);
      console.log('Parsed Data:', keyEventData);
      console.log('Key Combination:', formatCurrentKeyCombination());
      console.groupEnd();

      setCurrentEvent(keyEventData);
      setHasStarted(true);

      // Add to history (keep last 10)
      const historyItem: KeyHistoryItem = {
        key: event.key,
        code: event.code,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        }),
      };

      setKeyHistory(prev => [historyItem, ...prev.slice(0, 9)]);
    };

    // Add event listener to document
    document.addEventListener('keydown', handleKeyDown);

    // Log initial message to console
    console.log('🎹 Keyboard Event Tester initialized. Press any key to see events logged here!');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const formatKeyCombination = () => {
    if (!currentEvent) return '';
    
    const modifiers = [];
    if (currentEvent.ctrlKey) modifiers.push('Ctrl');
    if (currentEvent.altKey) modifiers.push('Alt');
    if (currentEvent.shiftKey) modifiers.push('Shift');
    if (currentEvent.metaKey) modifiers.push('Meta');
    
    const key = currentEvent.key;
    return modifiers.length > 0 ? `${modifiers.join(' + ')} + ${key}` : key;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Keyboard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Keyboard Event Tester</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Press any key to see its JavaScript keyboard event properties in real-time. Perfect 
            for developers debugging keyboard interactions.
          </p>
          
          {/* SEO-friendly hidden content */}
          <div className="sr-only">
            <h2>Free JavaScript Keyboard Event Testing Tool</h2>
            <p>
              Test keyboard events, find keycodes, inspect event.key and event.code values. 
              Essential tool for web developers building keyboard shortcuts, accessibility features, 
              and interactive web applications. Supports all keyboard keys including function keys, 
              arrow keys, modifier keys (Ctrl, Alt, Shift, Meta), and special characters.
            </p>
          </div>
        </header>

        <main>
          {!hasStarted ? (
            /* Initial State */
            <section className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center mb-8">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Keyboard className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Press any key to get started</h2>
              <p className="text-gray-600">
                Try letters, numbers, function keys, arrows, modifiers, or special characters
              </p>
            </section>
          ) : (
            /* Active State */
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Key Event Properties */}
              <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Key Event Properties
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">event.key</span>
                    <span className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                      {currentEvent?.key}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">event.code</span>
                    <span className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                      {currentEvent?.code}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">event.keyCode</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                        Deprecated
                      </span>
                    </div>
                    <span className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                      {currentEvent?.keyCode}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">event.which</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                        Deprecated
                      </span>
                    </div>
                    <span className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                      {currentEvent?.which}
                    </span>
                  </div>
                </div>

                {/* Modifier Keys */}
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Modifier Keys</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Alt Key</span>
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      currentEvent?.altKey ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {currentEvent?.altKey ? 'true' : 'false'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Ctrl Key</span>
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      currentEvent?.ctrlKey ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {currentEvent?.ctrlKey ? 'true' : 'false'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Shift Key</span>
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      currentEvent?.shiftKey ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {currentEvent?.shiftKey ? 'true' : 'false'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-gray-700">Meta Key</span>
                      <span className="text-xs text-gray-500">⌘</span>
                    </div>
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      currentEvent?.metaKey ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {currentEvent?.metaKey ? 'true' : 'false'}
                    </span>
                  </div>
                </div>

                {/* Key Combination */}
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Key Combination</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <span className="font-mono text-lg text-blue-900">
                    {formatKeyCombination()}
                  </span>
                </div>
              </article>

              {/* Raw Event Data */}
              <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-gray-500">{'{}'}</span>
                  Raw Event Data
                </h2>
                
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto">
                  <pre>{JSON.stringify({
                    key: currentEvent?.key,
                    code: currentEvent?.code,
                    keyCode: currentEvent?.keyCode,
                    which: currentEvent?.which,
                    altKey: currentEvent?.altKey,
                    ctrlKey: currentEvent?.ctrlKey,
                    shiftKey: currentEvent?.shiftKey,
                    metaKey: currentEvent?.metaKey,
                    timestamp: currentEvent?.timestamp,
                  }, null, 2)}</pre>
                </div>
              </article>
            </section>
          )}

          {/* Key History */}
          {hasStarted && (
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-gray-500">⏱</span>
                Key History (Last 10)
              </h2>
              
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-4 font-medium text-gray-700">#</th>
                      <th className="text-left py-2 px-4 font-medium text-gray-700">Key</th>
                      <th className="text-left py-2 px-4 font-medium text-gray-700">Code</th>
                      <th className="text-right py-2 px-4 font-medium text-gray-700">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keyHistory.map((item, index) => (
                      <tr key={`${item.timestamp}-${index}`} className={`border-b border-gray-100 ${
                        index === 0 ? 'bg-blue-50' : ''
                      }`}>
                        <td className="py-2 px-4 text-sm text-gray-600">
                          {index === 0 ? (
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                              Latest
                            </span>
                          ) : (
                            index + 1
                          )}
                        </td>
                        <td className="py-2 px-4 font-mono text-sm">{item.key}</td>
                        <td className="py-2 px-4 font-mono text-sm text-gray-600">{item.code}</td>
                        <td className="py-2 px-4 text-sm text-gray-600 text-right">{item.timestamp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </main>

        {/* Developer Tips */}
        <aside className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center gap-2">
            <span className="text-orange-600">💡</span>
            Developer Tips
          </h3>
          <ul className="space-y-2 text-orange-800">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1">•</span>
              <span>
                Use <code className="bg-orange-100 px-2 py-1 rounded text-sm font-mono">event.key</code> for modern applications instead of deprecated keyCode/which
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1">•</span>
              <span>
                <code className="bg-orange-100 px-2 py-1 rounded text-sm font-mono">event.code</code> represents physical keys and is layout-independent
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1">•</span>
              <span>Check modifier keys for complex keyboard shortcuts and accessibility features</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1">•</span>
              <span>The raw event data shows all available properties for debugging</span>
            </li>
          </ul>
        </aside>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p>Built for developers, by developers. Open your browser console to see logged events.</p>
          <div className="mt-4 text-sm">
            <p>
              Created by <a href="https://aswinvb.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Aswin VB</a> | 
              <span className="mx-2">•</span>
              <a href="https://github.com/aswinzz" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
