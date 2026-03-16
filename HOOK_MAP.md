# Hook Map

## App Component

### `App`
- Hooks used: none
- Internal functions: none

## EyeBackground Component

### `EyeBackground`
- Hooks used:
  - `useState` (`isMouseOnScreen`, `isWinking`)
  - `useRef` (`mouseX`, `mouseY`, `leftEyeRef`, `rightEyeRef`)
  - `useSpring` (`leftPupilX`, `leftPupilY`, `rightPupilX`, `rightPupilY`, `leftHighlightX`, `leftHighlightY`, `rightHighlightX`, `rightHighlightY`)
  - `useEffect` (mouse tracking effect, idle look-around effect, wink timer effect)

### `handleMouseMove` (inside first `useEffect`)
- Uses state setters:
  - `setIsMouseOnScreen`
- Uses refs:
  - reads/writes `mouseX.current`, `mouseY.current`
  - reads `leftEyeRef.current`, `rightEyeRef.current`
- Uses springs:
  - sets `leftPupilX`, `leftPupilY`, `rightPupilX`, `rightPupilY`
  - sets `leftHighlightX`, `leftHighlightY`, `rightHighlightX`, `rightHighlightY`

### `handleMouseLeave` (inside first `useEffect`)
- Uses state setters:
  - `setIsMouseOnScreen`
- Uses springs:
  - resets all pupil and highlight springs to `0`

### `handleDocumentMouseOut` (inside first `useEffect`)
- Hooks directly used: none
- Calls: `handleMouseLeave` when `relatedTarget` is missing

### `handleWindowBlur` (inside first `useEffect`)
- Hooks directly used: none
- Calls: `handleMouseLeave`

### Idle interval callback (inside second `useEffect`)
- Uses state:
  - gated by `isMouseOnScreen`
- Uses springs:
  - updates all pupil and highlight springs with random offsets

### Wink interval callback (inside third `useEffect`)
- Uses state setters:
  - `setIsWinking(true)` then `setIsWinking(false)`

## Navbar Component

### `Navbar`
- Hooks used: none
- Internal functions: none

## About Component

### `About`
- Hooks used: none
- Internal functions: none

## SkillsSection Component

### `SkillsSection`
- Hooks used: none
- Internal functions: none

## SoftSkillsSection Component

### `SoftSkillsSection`
- Hooks used: none
- Internal functions: none

## ProjectCard Component

### `ProjectCard`
- Hooks used: none
- Internal functions: none