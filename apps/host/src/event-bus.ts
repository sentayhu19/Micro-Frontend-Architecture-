type Handler<T> = (payload: T) => void

class Bus {
  private map = new Map<string, Set<Function>>()
  on<T>(event: string, handler: Handler<T>) {
    if (!this.map.has(event)) this.map.set(event, new Set())
    this.map.get(event)!.add(handler as any)
    return () => this.off(event, handler)
  }
  off<T>(event: string, handler: Handler<T>) {
    this.map.get(event)?.delete(handler as any)
  }
  emit<T>(event: string, payload: T) {
    this.map.get(event)?.forEach(h => (h as Handler<T>)(payload))
  }
}

const bus = new Bus()
export default bus
