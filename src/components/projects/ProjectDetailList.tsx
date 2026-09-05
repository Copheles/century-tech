import type { Project, ProjectDetailItem } from '../../data/projects'

export interface ProjectDetailGroup {
  title: string
  children?: string[]
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}

function isDetailItemArray(value: unknown): value is ProjectDetailItem[] {
  return (
    Array.isArray(value) &&
    value.every((item) => item && typeof item === 'object' && 'title' in item)
  )
}

/** Flatten mixed project.detail shapes into parent groups + optional children. */
export function normalizeProjectDetail(detail: Project['detail']): ProjectDetailGroup[] {
  if (!detail) return []

  if (Array.isArray(detail)) {
    return detail.map((item) => ({
      title: item.title,
      children: item.detail,
    }))
  }

  const nested = detail.detail
  if (!nested?.length) {
    return [{ title: detail.title }]
  }

  if (isStringArray(nested)) {
    return [{ title: detail.title, children: nested }]
  }

  if (isDetailItemArray(nested)) {
    return [
      { title: detail.title },
      ...nested.map((item) => ({
        title: item.title,
        children: item.detail,
      })),
    ]
  }

  return [{ title: detail.title }]
}

interface ProjectDetailListProps {
  detail?: Project['detail']
  className?: string
}

function ProjectDetailList({ detail, className = '' }: ProjectDetailListProps) {
  const groups = normalizeProjectDetail(detail)

  if (!groups.length) return null

  return (
    <div className={`project-detail-list${className ? ` ${className}` : ''}`}>
      {groups.map((group) =>
        group.children?.length ? (
          <div className="project-detail-group" key={`${group.title}-group`}>
            <h3>{group.title}</h3>
            <ul>
              {group.children.map((child) => (
                <li key={child}>{child}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="project-detail-note" key={`${group.title}-note`}>
            {group.title}
          </p>
        ),
      )}
    </div>
  )
}

export default ProjectDetailList
