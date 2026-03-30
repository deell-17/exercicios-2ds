const taskInput    = document.getElementById('taskInput');
const addBtn       = document.getElementById('addBtn');
const taskList     = document.getElementById('taskList');
const warning      = document.getElementById('warning');
const emptyState   = document.getElementById('emptyState');
const countTotal   = document.getElementById('countTotal');
const countDone    = document.getElementById('countDone');
const countPending = document.getElementById('countPending');

let tasks = [];

// ─── Atualiza os contadores de tarefas ───────────────────────────────────────
function updateCounters() {
  const total   = tasks.length;
  const done    = tasks.filter(t => t.done).length;
  const pending = total - done;

  countTotal.textContent   = total;
  countDone.textContent    = done;
  countPending.textContent = pending;
}

// ─── Renderiza a lista de tarefas no DOM ─────────────────────────────────────
function render() {
  // Remove todos os itens exceto o emptyState
  Array.from(taskList.children).forEach(child => {
    if (child.id !== 'emptyState') child.remove();
  });

  if (tasks.length === 0) {
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  tasks.forEach((task, index) => {
    const li = createTaskElement(task, index);
    taskList.appendChild(li);
  });
}

// ─── Cria o elemento <li> de uma tarefa ──────────────────────────────────────
function createTaskElement(task, index) {
  const li = document.createElement('li');
  li.classList.add('task-item');
  if (task.done) li.classList.add('done');

  // Círculo de confirmação
  const check = document.createElement('div');
  check.classList.add('task-check');
  check.innerHTML = task.done ? '✓' : '';
  check.title = task.done ? 'Marcar como pendente' : 'Marcar como concluída';

  // Texto da tarefa
  const span = document.createElement('span');
  span.classList.add('task-text');
  span.textContent = task.text;
  span.title = 'Clique para alternar conclusão';

  // Botão remover
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remover';

  // ─── Eventos ────────────────────────────────────────────────────────────────
  const toggle = () => {
    tasks[index].done = !tasks[index].done;
    render();
    updateCounters();
  };

  span.addEventListener('click', toggle);
  check.addEventListener('click', toggle);

  removeBtn.addEventListener('click', () => {
    tasks.splice(index, 1);
    render();
    updateCounters();
  });

  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(removeBtn);

  return li;
}

// ─── Adiciona uma nova tarefa ────────────────────────────────────────────────
function addTask() {
  const text = taskInput.value.trim();

  // RF06 — Validação de campo vazio
  if (!text) {
    warning.classList.add('show');
    taskInput.focus();
    setTimeout(() => warning.classList.remove('show'), 3000);
    return;
  }

  warning.classList.remove('show');
  tasks.push({ text, done: false });
  taskInput.value = '';
  taskInput.focus();

  render();
  updateCounters();
}

// ─── Eventos principais ──────────────────────────────────────────────────────
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

// ─── Inicialização ───────────────────────────────────────────────────────────
render();
updateCounters();