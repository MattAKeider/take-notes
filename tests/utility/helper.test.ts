import getAllTags from '../../src/utility/helper';
import { type Note } from '../../src/data/data';

describe('helper', () => {
  test('should only return all unique tags from notes objects array', () => {
    expect(getAllTags(notes)).toEqual([
      'Dev', 
      'React', 
      'TypeScript', 
      'Fitness', 
      'Health'
    ]);
  });

  test('should return empty tags array if there aren\'t any tags', () => {
    expect(getAllTags(emptyTags)).toEqual([]);
  });

  test('should return empty tags array if there aren\'t any notes', () => {
    expect(getAllTags([])).toEqual([]);
  });
});

const emptyTags: Note[] = [
  {
    title: 'React Performance Optimization',
    tags: [],
    content: 'Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks',
    lastEdited: '2024-10-29T10:15:00Z',
    isArchived: false
  }
];

const notes: Note[] = [
  {
    title: 'React Performance Optimization',
    tags: [
      'Dev',
      'React'
    ],
    content: 'Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks',
    lastEdited: '2024-10-29T10:15:00Z',
    isArchived: false
  },
  {
    title: 'TypeScript Migration Guide',
    tags: [
      'Dev',
      'React',
      'TypeScript'
    ],
    content: 'Project migration steps:\n\n1. Initial Setup\n- Install TypeScript dependencies\n- Configure tsconfig.json\n- Set up build pipeline\n\n2. Migration Strategy\n- Start with newer modules\n- Add type definitions gradually\n- Use "any" temporarily for complex cases\n\n3. Testing Approach\n- Update test configuration\n- Add type testing\n- Validate build process\n\nDeadline: End of Q4 2024',
    lastEdited: '2024-10-26T09:20:00Z',
    isArchived: true
  },
  {
    title: 'Weekly Workout Plan',
    tags: [
      'Fitness',
      'Health'
    ],
    content: 'Monday: Upper Body\n- Bench Press 4x8\n- Rows 4x10\n- Shoulder Press 3x12\n- Pull-ups 3 sets\n\nWednesday: Lower Body\n- Squats 4x8\n- Romanian Deadlifts 3x10\n- Lunges 3x12 each\n- Calf Raises 4x15\n\nFriday: Full Body\n- Deadlifts 3x5\n- Push-ups 3x12\n- Leg Press 3x12\n- Core Work\n\nCardio: Tuesday/Thursday - 30 min run',
    lastEdited: '2024-10-25T18:10:00Z',
    isArchived: false
  }
];