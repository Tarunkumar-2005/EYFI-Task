import confetti from 'canvas-confetti';

export const triggerConfetti = (origin = { x: 0.5, y: 0.6 }) => {
  const count = 180;
  const defaults = {
    origin,
    zIndex: 9999,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#2595ff', '#10B981', '#F59E0B']
  });
  fire(0.2, {
    spread: 60,
    colors: ['#6366F1', '#F59E0B', '#38bdf8']
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#F59E0B', '#10B981', '#ffffff']
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#2595ff', '#F59E0B']
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#10B981', '#6366F1', '#e0f2fe']
  });
};

export const triggerGoldConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#F59E0B', '#FDE68A', '#D97706', '#FFFFFF'],
    zIndex: 9999
  });
};
