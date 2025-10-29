import { useEffect } from 'react';

export const useEventBus = () => {
  const eventBus = (window as any).eventBus;

  const emit = (event: string, data?: any) => {
    if (eventBus) {
      eventBus.emit(event, data);
    }
  };

  const subscribe = (event: string, callback: (data: any) => void) => {
    if (eventBus) {
      return eventBus.subscribe(event, callback);
    }
    return () => {};
  };

  return { emit, subscribe };
};

export const useUnreadCount = (count: number) => {
  const { emit } = useEventBus();

  useEffect(() => {
    emit('email:unread', count);
  }, [count, emit]);
};
