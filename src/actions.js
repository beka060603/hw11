const inc_action = () => ({
  type: 'INC'
})

const dec_action = () => ({
  type: 'DEC',
})

const rnd_action = () => ({
  type: 'RND',
  payload: Math.floor(Math.random() * (30 - -20 + 1) + -20)
})

const rst_action = () => ({
  type: 'RST'
})


export {inc_action, dec_action, rnd_action, rst_action}
