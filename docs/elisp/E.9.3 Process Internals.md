---
slug: Process-Internals
---

The fields of a process (for a complete list, see the definition of `struct Lisp_Process` in `process.h`) include:

### `name`

A Lisp string, the name of the process.

### `command`

A list containing the command arguments that were used to start this process. For a network or serial process, it is `nil` if the process is running or `t` if the process is stopped.

### `filter`

A Lisp function used to accept output from the process.

### `sentinel`

A Lisp function called whenever the state of the process changes.

### `buffer`

The associated buffer of the process.

### `pid`

An integer, the operating system’s process ID. Pseudo-processes such as network or serial connections use a value of 0.

### `childp`

A flag, `t` if this is really a child process. For a network or serial connection, it is a plist based on the arguments to `make-network-process` or `make-serial-process`.

### `mark`

A marker indicating the position of the end of the last output from this process inserted into the buffer. This is often but not always the end of the buffer.

### `kill_without_query`

If this is non-zero, killing Emacs while this process is still running does not ask for confirmation about killing the process.

### `raw_status`

The raw process status, as returned by the `wait` system call.

### `status`

The process status, as `process-status` should return it. This is a Lisp symbol, a cons cell, or a list.

### `tick`

### `update_tick`

If these two fields are not equal, a change in the status of the process needs to be reported, either by running the sentinel or by inserting a message in the process buffer.

### `pty_flag`

Non-zero if communication with the subprocess uses a pty; zero if it uses a pipe.

### `infd`

The file descriptor for input from the process.

### `outfd`

The file descriptor for output to the process.

### `tty_name`

The name of the terminal that the subprocess is using, or `nil` if it is using pipes.

### `decode_coding_system`

Coding-system for decoding the input from this process.

### `decoding_buf`

A working buffer for decoding.

### `decoding_carryover`

Size of carryover in decoding.

### `encode_coding_system`

Coding-system for encoding the output to this process.

### `encoding_buf`

A working buffer for encoding.

### `inherit_coding_system_flag`

Flag to set `coding-system` of the process buffer from the coding system used to decode process output.

### `type`

Symbol indicating the type of process: `real`, `network`, `serial`.
