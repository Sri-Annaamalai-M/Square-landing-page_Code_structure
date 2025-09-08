import React, { useState, useEffect } from 'react'
import Button from '../../components/ui/Button'
import EditText from '../../components/ui/EditText'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import agentsData from '../../../public/data/agentsData.js'

const CategoriesAgents = () => {
  const { category, categoryId, subcategoryId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  
  // Determine if this is industry-specific or foundational based on URL path
  const isIndustrySpecific = location.pathname.includes('industry-specific-agents') || category === 'industry-specific-agents'
  const isFoundational = category === 'foundation-agents'
  
  // Get the appropriate data based on route
  let displayedAgents = []
  let categoryData = null
  let subcategoryData = null
  let headerTitle = ''
  let headerDescription = ''
  
  if (isIndustrySpecific && categoryId) {
    // For industry-specific, find the category and show its agents directly
    categoryData = agentsData.industry?.find(cat => cat.id === categoryId)
    displayedAgents = categoryData?.agents || []
    headerTitle = categoryData?.name || 'Industry Agents'
    headerDescription = categoryData?.description || 'Industry-specific solutions for specialized business processes and workflows.'
  } else if (isFoundational && categoryId && subcategoryId) {
    // For foundational, find category > subcategory > agents
    const foundationalCategory = agentsData.foundational?.find(cat => cat.id === categoryId)
    subcategoryData = foundationalCategory?.subCategories?.find(sub => sub.id === subcategoryId)
    displayedAgents = subcategoryData?.agents || []
    headerTitle = subcategoryData?.name || 'Foundational Agents'
    headerDescription = subcategoryData?.description || 'Task-focused building blocks for extraction, summarization, routing, and orchestration.'
  } else {
    // Default case
    headerTitle = 'Agents'
    headerDescription = 'Browse available AI agents'
  }
  
  // Filter agents based on search term and limit to maximum 5 agents
  const filteredAgents = displayedAgents
    .filter(agent =>
      agent.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.summary?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5)

  // Function to handle navigation to agent details
  const handleAgentDetail = (agentId) => {
    if (isIndustrySpecific) {
      navigate(`/agent-workbench/industry-specific-agents/${categoryId}/agents/${agentId}`)
    } else if (isFoundational) {
      navigate(`/agent-workbench/foundation-agents/${categoryId}/${subcategoryId}/agents/${agentId}`)
    }
  }

  return (
    <div className="p-8 h-[842px] w-[1226px]">
      <div className="flex flex-col gap-[29px] sm:gap-[58px] justify-start items-center w-full">
        {/* Agent Categories Section */}
        <div className="flex flex-col gap-[31px] sm:gap-[62px] justify-start items-center w-full">
          {/* Category Header and Description */}
          <div className="flex flex-col gap-[16px] sm:gap-[32px] justify-start items-center w-full">
            {/* Category Description */}
            <div className="flex flex-row gap-[8px] sm:gap-[16px] justify-center items-center w-full">
              {/* <div className="bg-global-1 rounded-[16px] p-[10px] sm:p-[20px] w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] flex justify-center items-center">
                <img 
                  src={agentsData.image || "/placeholder.jpg"} 
                  className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px]"
                />
              </div> */}
              <div className="flex flex-col gap-[3px] sm:gap-[6px] justify-start items-start flex-1">
                <h3 className="text-[18px] sm:text-[22px] font-semibold leading-[23px] sm:leading-[28px] text-global-5 ">
                  {headerTitle}
                </h3>
                <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-global-5 ">
                  {headerDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Agent Cards Section */}
          <div className="flex flex-col gap-[12px] sm:gap-[24px] w-full">
            {filteredAgents.length > 0 ? (
              <>
                {/* Agents Count
                <div className="text-center mb-4">
                  <p className="text-[14px] sm:text-[16px] text-global-6">
                    Showing {filteredAgents.length} of {displayedAgents.length} {displayedAgents.length === 1 ? 'agent' : 'agents'}
                    {searchTerm && ` matching "${searchTerm}"`}
                    {filteredAgents.length === 5 && displayedAgents.length > 5 && !searchTerm && " (maximum 5 shown)"}
                  </p>
                </div> */}

                {/* Agent Cards */}
                {filteredAgents.map((agent, index) => (
                  <div key={agent.id || index} className="flex flex-row justify-center items-center w-full shadow-[0px_1px_8px_#10182814] sm:shadow-[0px_2px_16px_#10182814] bg-global-2 rounded-[24px] p-[8px] sm:p-[16px]">
                    <div className="flex flex-row justify-center items-center w-full">
                      {/* Card Icon */}
                      <div className="w-[53px] h-[29px] sm:w-[106px] sm:h-[58px] bg-global-1 rounded-[8px] flex items-center justify-center">
                        {agent.image && agent.image != '/placeholder.jpg' ? (
                          <img 
                            src={agent.image} 
                            alt={agent.name}
                            className="w-full h-full object-cover rounded-[8px]"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {agent.name?.charAt(0) || 'A'}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Card Content */}
                      <div className="flex flex-col justify-start items-start w-full ml-[6px] sm:ml-[12px]">
                        {/* Title and Read more in same row */}
                        <div className="flex flex-row justify-between items-center w-full mb-[6px] sm:mb-[12px]">
                          <h4 className="text-[18px] sm:text-[22px] font-semibold leading-[23px] sm:leading-[28px] text-global-5 ">
                            {agent.name}
                          </h4>
                          <button 
                            onClick={() => handleAgentDetail(agent.id)}
                            className="text-[14px] sm:text-[16px] mt-2 pr-5 font-normal leading-[18px] sm:leading-[20px] text-global-7 font-inter text-[#3E57DA] hover:text-[#2E47CA] cursor-pointer"
                          >
                            Read more
                          </button>
                        </div>
                        {/* Summary/Description */}
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-global-6 font-inter w-full">
                          {agent.summary}
                        </p>

                        {/* Additional info for industry agents */}
                        {isIndustrySpecific && agent.solutions && (
                          <div className="mt-2 w-full">
                            <div className="flex flex-wrap gap-2">
                              {agent.solutions.slice(0, 3).map((solution, idx) => (
                                <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                                  {solution}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Use cases for industry agents */}
                        {/* {isIndustrySpecific && agent.useCases && (
                          <div className="mt-2 w-full">
                            <p className="text-xs text-global-6 mb-1">Use Cases:</p>
                            <div className="flex flex-wrap gap-2">
                              {agent.useCases.slice(0, 2).map((useCase, idx) => (
                                <span key={idx} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                                  {useCase}
                                </span>
                              ))}
                            </div>
                          </div>
                        )} */}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              /* No agents found */
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {searchTerm ? 'No matching agents found' : 'No agents available'}
                </h3>
                <p className="text-gray-600">
                  {searchTerm 
                    ? `No agents found matching "${searchTerm}". Try adjusting your search terms.`
                    : 'Agents for this category are coming soon. Check back later!'
                  }
                </p>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}
          </div>
        </div>   
      </div>
    </div>
  )
}

export default CategoriesAgents