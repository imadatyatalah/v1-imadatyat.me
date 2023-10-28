const AvailableForNewOpportunities = () => {
  return (
    <p className="flex items-center">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>

      <span className="ml-2 text-xs">Available for new opportunities</span>
    </p>
  );
};

export default AvailableForNewOpportunities;
