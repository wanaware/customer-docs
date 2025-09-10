---
title: Relationship Discovery Engine (RDE)
deprecated: false
hidden: false
metadata:
  robots: index
---
The Relationship Discovery Engine (RDE) stands as a pivotal component within WanAware Asset Inventory Management (AIM), serving as the foundational mechanism for processing and ingesting the relationships between normalized Connected Asset data. This data originates from an array of disparate sources, ensuring a comprehensive and holistic view of an organization's IT landscape regardless of location or deployment type.

These sources encompass a wide spectrum, including diverse integrations with existing systems, large-scale bulk uploads for rapid data migration, and meticulous manual entries to capture unique or highly specific asset information. Crucially, the RDE aggregates intelligence from leading cloud providers and network services, such as AWS, Microsoft Azure, Google Cloud Platform, Fortinet, Palo Alto Networks, Cisco and Cloudflare, guaranteeing data consistency and reliability for subsequent analysis and strategic decision-making.

Upon successful ingestion, the RDE embarks on the critical task of constructing a dynamic knowledge graph. This sophisticated graph is not a static representation but a continuously updated model, engineered to provide real-time, actionable insights into the ever-evolving IT environment. This dynamism ensures that organizations always possess the most current understanding of their infrastructure, enabling swift responses to changes and emerging threats.
Within the intricate architecture of this knowledge graph, the RDE meticulously represents all interdependencies between assets. This granular understanding extends beyond simple connections, encompassing a multifaceted view of how IT components interact and rely on one another. These interdependencies are categorized and visualized across several critical dimensions:

<Accordion title="Topology" icon="fa-info-circle">
  The RDE provides an intuitive visualization of both the physical and logical connections among assets. This 	includes a clear depiction of their organization within the infrastructure, offering a transparent picture 		of the network architecture. This topological insight is invaluable for understanding data flow, identifying 	 bottlenecks, and planning infrastructure expansions.
</Accordion>

<Accordion title="Security Controls" icon="fa-info-circle">
  A crucial aspect of the RDE's capability is its ability to map out and apply security measures. This includes a comprehensive understanding of elements like firewalls, access control lists (ACLs), and security groups, and how they are applied to different assets. This mapping significantly aids in the proactive identification of vulnerabilities, ensuring robust compliance with security policies and regulatory frameworks.
</Accordion>

<Accordion title="Routing Flows" icon="fa-info-circle">
  The RDE meticulously traces data paths between assets, providing profound insights into network performance, enabling efficient troubleshooting of connectivity issues, and facilitating the optimization of data transfer. This detailed understanding of routing is vital for maintaining high availability and ensuring optimal application performance.
</Accordion>

The robust construction of this dynamic knowledge graph is further enhanced by the strategic integration of static templates and advanced machine learning (ML) algorithms. Static templates serve as predefined structures for common asset types, significantly streamlining the categorization and connection of new data based on established patterns.

Complementing this, sophisticated ML algorithms continuously analyze incoming data. These algorithms are designed to discover novel relationships and identify anomalies that might be missed by traditional rule-based systems. This continuous analysis enriches the graph with previously unknown connections, uncovering hidden dependencies and potential risks.

The RDE’s dynamic knowledge graph is entirely composed of relationships that unequivocally signify the dependencies and interdependencies of connected assets. Each link within the graph represents a specific type of connection, providing context and meaning to the interactions between IT components. Examples include network dependencies (e.g., a server relying on a specific switch), security control associations (e.g., a firewall protecting a particular subnet), or data flow interdependencies (e.g., an application requiring access to a specific database). These relationships form the irreducible core of the knowledge graph, providing the necessary context to truly understand how different IT components interact and influence one another.

By consolidating this intricate web of information into a single, navigable knowledge graph, the RDE empowers organizations with unprecedented visibility into their increasingly complex IT environments. This holistic and real-time view transcends traditional inventory management, moving beyond simple asset lists to a deep understanding of their interconnectedness. This enhanced visibility facilitates proactive problem-solving, enabling organizations to anticipate and mitigate issues before they escalate. Furthermore, it significantly enhances their security posture by providing a clear understanding of attack surfaces and control effectiveness. Finally, it optimizes resource allocation, ensuring that IT resources are utilized efficiently and effectively, ultimately leading to more resilient, secure, and efficient operations.
