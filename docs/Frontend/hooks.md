---
title: React Hooks
parent: Frontend
nav_order: 2
---

# React Hooks

Hooks let you use state and lifecycle features in function components.

## Examples
```js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

```