import ErrorHandler from '../middlewares/error.js'
import { Tasks } from '../models/task.js'

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body

    await Tasks.create({
      title,
      description,
      user: req.user,
    })
    res.status(201).json({
      success: true,
      message: 'Task added Successfully',
    })
  } catch (error) {
    next(error)
  }
}

export const getTask = async (req, res, next) => {
  try {
    const userid = req.user._id
    const tasks = await Tasks.find({ user: userid })
    res.status(200).json({
      success: true,
      tasks,
    })
  } catch (error) {
    next(error)
  }
}
export const updateTask = async (req, res, next) => {
  try {
    const task = await Tasks.findById(req.params.id)
    if (!task) return next(new ErrorHandler('Invalid id ', 404))
    task.isCompleted = !task.isCompleted
    await task.save()
    res.status(200).json({
      success: true,
      message: ' Task Updated',
    })
  } catch (error) {
    next(error)
  }
}
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Tasks.findById(req.params.id)
    if (!task) return next(new ErrorHandler('Invalid id ', 404))
    await task.deleteOne()
    res.status(200).json({
      success: true,
      message: ' Task deleted',
    })
  } catch (error) {
    next(error)
  }
}
